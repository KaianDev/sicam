import prisma from "@/lib/db"
import { throwError } from "@/lib/error"
import { NextRequest, NextResponse } from "next/server"

interface RequestParams {
  params: {
    uex: string
  }
}

export const GET = async (req: NextRequest, { params }: RequestParams) => {
  try {
    const uex = params.uex

    const school = await prisma.school.findUnique({ where: { uex } })

    if (!school) {
      return NextResponse.json(
        { message: "Escola não encontrada" },
        { status: 404 },
      )
    }

    return NextResponse.json({ school }, { status: 200 })
  } catch (err) {
    throwError(err)
  }
}
