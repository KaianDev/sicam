import { Entity } from "@prisma/client"

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const getEntities = async () => {
  const res = await fetch(`${apiUrl}/entity`)
  const data = await res.json()
  if (!res.ok) {
    throw new Error(
      "Ocorreu um erro no carregamento das entidades, tente novamente mais tarde.",
    )
  }
  return data.entities as Entity[]
}

export const getEntity = async (id: string) => {
  const req = await fetch(`${apiUrl}/entity/${id}`)
  const res = await req.json()
  if (!req.ok) {
    throw new Error("Ocorreu um erro no carregamento")
  }

  return res.entity as Entity
}
