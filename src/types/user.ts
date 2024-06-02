import { fetchUserById } from "@/actions/user"
import { User } from "@prisma/client"

export type UserWithOutPassword = Omit<User, "password">
export type UserWithSector = Awaited<ReturnType<typeof fetchUserById>>
