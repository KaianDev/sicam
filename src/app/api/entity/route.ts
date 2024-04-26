import prisma from "@/lib/db"
import { throwError } from "@/lib/error"
import { addEntitySchema } from "@/lib/zod"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  try {
    const entities = await prisma.entity.findMany({
      orderBy: [
        {
          uex: {
            sort: "asc",
            nulls: "first",
          },
        },
        {
          name: "asc",
        },
      ],
    })
    return NextResponse.json({ entities }, { status: 200 })
  } catch (err) {
    return throwError(err)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()
    const schema = addEntitySchema.safeParse(data)
    if (!schema.success) {
      throw new Error("Dados inválidos")
    }
    const { name, uex } = schema.data

    const entity = await prisma.entity.findUnique({ where: { name } })

    if (entity) {
      throw new Error("A entidade já existe")
    }
    const newEntity = await prisma.entity.create({ data: { name, uex } })
    return NextResponse.json({ newEntity }, { status: 201 })
  } catch (err) {
    return throwError(err)
  }
}
