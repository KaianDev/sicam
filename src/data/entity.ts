import { CreateOrUpdateEntityType } from "@/types/zod"
import { Entity } from "@prisma/client"

export const getEntities = async () => {
  const req = await fetch("http://localhost:3000/api/entity", {
    next: {
      tags: ["entities"],
    },
  })
  if (!req.ok) {
    throw new Error("Ocorreu um erro no carregamento")
  }

  const res = await req.json()
  return res.entities as Entity[]
}
