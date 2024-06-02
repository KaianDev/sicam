import { getAllUsers, getUserById } from "@/services/user"

export const fetchUsers = async () => {
  const users = await getAllUsers()
  return users
}

export const fetchUserById = async (id: string) => {
  return await getUserById(id)
}
