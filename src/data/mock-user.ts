import { User } from "@prisma/client"

export const mockUser = {
  id: "1111",
  name: "John Snow",
  role: "USER",
  email: "john@example.com",
} as User
