import { NextResponse } from "next/server"

export const throwError = (err: any) => {
  const erro = err as Error
  return NextResponse.json({ message: erro.message }, { status: 400 })
}
