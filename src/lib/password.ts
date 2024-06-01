import bcrypt from "bcryptjs"

export const checkPassword = async (password: string, hash: string) => {
  const check = await bcrypt.compare(password, hash)
  return check
}

export const hashPassword = async (password: string) => {
  const hashPassword = await bcrypt.hash(password, 10)
  return hashPassword
}
