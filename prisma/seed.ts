import bcrypt from "bcryptjs"

import { PrismaClient, Sector, User } from "@prisma/client"
const prisma = new PrismaClient()

const main = async () => {
  console.log("Iniciando seed")

  const dataSector = { name: "ROOT" } as Sector
  console.log("Criando setor ROOT")

  const sector = await prisma.sector.create({ data: dataSector })
  console.log("Setor ROOT criado com sucesso", sector)

  const name = process.env.SICAM_ADMIN_NAME || "Admin"
  const email = process.env.SICAM_ADMIN_EMAIL || "admin@sicam.com"
  const password = process.env.SICAM_ADMIN_PASSWORD || "admin123"

  const hashedPassword = await bcrypt.hash(password, 10)
  const dataAdminUser = {
    name,
    email,
    password: hashedPassword,
    role: "ADMIN",
    sectorId: sector.id,
  } as User

  console.log("Criando usuário administrador")
  const adminUser = await prisma.user.create({ data: dataAdminUser })

  console.log("Usuário administrador criado com sucesso", adminUser)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
