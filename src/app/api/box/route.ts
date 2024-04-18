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
      include: { entity: true },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ boxes }, { status: 200 })
  } catch (err) {
    return throwError(err)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    //const ownerId = "00b164b6-2262-4e76-a32a-8a37c567af02" // John Snow
    const ownerId = "4e4a4667-9822-408b-bc5d-8f9f37981bd0" // Daenarys

    const user = await prisma.user.findFirst({ where: { id: ownerId } })

    if (!user) {
      throw new Error("Usuário não encontrado!")
    }

    const sectorId = user.sectorId

    const data = await req.json()
    const schema = addBoxSchema.safeParse(data)

    if (!schema.success) {
      throw new Error("Dados inválidos")
    }

    const { content, entityId, observation } = schema.data

    const entity = await prisma.entity.findFirst({
      where: { id: entityId },
      include: { boxes: true },
    })

    const sector = await prisma.sector.findFirst({
      where: {
        id: sectorId,
      },
      include: {
        boxes: {
          where: {
            entityId,
          },
        },
      },
    })

    if (!entity) {
      throw new Error("A entidade não foi encontrada")
    }

    if (!sector) {
      throw new Error("Setor inválido")
    }

    console.log(sector.boxes)

    const numBox = sector.boxes.length + 1

    const newBox = await prisma.box.create({
      data: {
        content,
        observation,
        numBox,
        entityId,
        ownerId,
        sectorId,
      },
    })

    return NextResponse.json({ newBox }, { status: 201 })
  } catch (err) {
    return throwError(err)
  }
}
