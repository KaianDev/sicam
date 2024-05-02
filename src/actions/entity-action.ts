"use server"

import { addEntityService } from "@/services/entity"
import { CreateOrUpdateEntityType } from "@/types/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const addEntityAction = async (data: CreateOrUpdateEntityType) => {
  await addEntityService(data)
  revalidatePath("/app/admin/entity")
  redirect("/app/admin/entity")
}
