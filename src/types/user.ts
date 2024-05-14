import { User } from "@prisma/client"

export type UserWithOutPassword = Omit<User, "password">
