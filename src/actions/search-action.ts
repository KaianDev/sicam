"use server"

import { redirect } from "next/navigation"

export const searchAction = (formData: FormData) => {
  const search = formData.get("search")
  if (search) {
    redirect(`/?search=${search}`)
  }
}
