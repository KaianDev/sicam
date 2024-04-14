import prisma from "@/lib/db"
import { throwError } from "@/lib/error"
import { addBoxSchema } from "@/lib/zod"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams
    const page = searchParams.get("page")
    const search = searchParams.get("search")

    const take = 12
    const skip =
      page && !isNaN(parseInt(page)) ? (parseInt(page) - 1) * take : 0 * take

    const boxes = await prisma.box.findMany({
      take,
      skip,
      where: search ? { content: { contains: search } } : {},
    })

    return NextResponse.json({ boxes }, { status: 200 })
  } catch (err) {
    return throwError(err)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const ownerId = "70161e14-65cf-4eaf-a541-e5b7a2bb148e"

    const user = await prisma.user.findFirst({ where: { id: ownerId } })
    console.log(user)

    const data = await req.json()
    const schema = addBoxSchema.safeParse(data)

    if (!schema.success) {
      throw new Error("Dados inválidos")
    }

    const { content, schoolId, observation } = schema.data

    const school = await prisma.school.findFirst({
      where: { id: schoolId },
      include: { boxes: true },
    })

    if (!school) {
      throw new Error("A escola não encontrada")
    }

    const numBox = school.boxes.length + 1

    const newBox = await prisma.box.create({
      data: {
        content,
        observation,
        schoolId,
        numBox,
        ownerId,
      },
    })

    return NextResponse.json({ newBox }, { status: 201 })
  } catch (err) {
    return throwError(err)
  }
}
