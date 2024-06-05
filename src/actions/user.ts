"use server"

import { getAllUsers, getUserById } from "@/services/user"

export const fetchUsers = async () => {
  try {
    const users = await getAllUsers()
    return users
  } catch (error) {
    return []
  }
}

export const fetchUserById = async (id: string) => {
  try {
    return await getUserById(id)
  } catch (error) {
    return null
  }
}
