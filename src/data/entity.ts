import { Entity } from "@prisma/client"

export const getEntities = async () => {
  const req = await fetch("http://localhost:3000/api/entity", {
    next: {
      tags: ["entities"],
    },
  })
  const res = await req.json()
  if (!req.ok) {
    throw new Error("Ocorreu um erro no carregamento")
  }

  return res.entities as Entity[]
}

export const getEntity = async (id: string) => {
  const req = await fetch(`http://localhost:3000/api/entity/${id}`)
  const res = await req.json()
  if (!req.ok) {
    throw new Error("Ocorreu um erro no carregamento")
  }

  return res.entity as Entity
}
