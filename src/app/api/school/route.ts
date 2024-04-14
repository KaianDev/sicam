import prisma from "@/lib/db"
import { throwError } from "@/lib/error"
import { addSchoolSchema } from "@/lib/zod"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  try {
    const schools = await prisma.school.findMany()
    return NextResponse.json({ schools }, { status: 200 })
  } catch (err) {
    return throwError(err)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()
    const schema = addSchoolSchema.safeParse(data)
    if (!schema.success) {
      throw new Error("Dados inválidos")
    }
    const { uex, name } = schema.data

    const school = await prisma.school.findUnique({ where: { uex } })

    if (school) {
      throw new Error("A escola já existe")
    }
    const newSchool = await prisma.school.create({ data: { uex, name } })
    return NextResponse.json({ newSchool }, { status: 201 })
  } catch (err) {
    return throwError(err)
  }
}
