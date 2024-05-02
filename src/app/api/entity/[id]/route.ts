import prisma from "@/lib/db"
import { throwError } from "@/lib/error"
import { getEntityService } from "@/services/entity"
import { NextRequest, NextResponse } from "next/server"

interface RequestParams {
  params: {
    id: string
  }
}

export const GET = async (req: NextRequest, { params }: RequestParams) => {
  try {
    const id = params.id

    const entity = await getEntityService(id)

    if (!entity) {
      return NextResponse.json(
        { message: "Escola não encontrada" },
        { status: 404 },
      )
    }

    return NextResponse.json({ entity }, { status: 200 })
  } catch (err) {
    return throwError(err)
  }
}
