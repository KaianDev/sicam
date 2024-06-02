import { fetchUserById } from "@/data/users"
import { User } from "@prisma/client"

export type UserWithOutPassword = Omit<User, "password">
export type UserWithSector = Awaited<ReturnType<typeof fetchUserById>>
