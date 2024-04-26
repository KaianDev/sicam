"use server"

import { CreateOrUpdateEntityType } from "@/types/zod"
import { revalidateTag } from "next/cache"

export const addEntityAction = async (data: CreateOrUpdateEntityType) => {
  await fetch("http://localhost:3000/api/entity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  revalidateTag("entities")
}
