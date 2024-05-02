import { throwError } from "@/lib/error"

import { addEntityService, getEntitiesService } from "@/services/entity"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  try {
    const entities = await getEntitiesService()
    return NextResponse.json({ entities }, { status: 200 })
  } catch (err) {
    return throwError(err)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()
    const newEntity = await addEntityService(data)
    return NextResponse.json({ newEntity }, { status: 201 })
  } catch (err) {
    return throwError(err)
  }
}
