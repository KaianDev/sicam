import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"
import { storage } from "@/lib/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import mime from "mime"

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
  return users
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
  return user
}

export const getUserById = async (id: string) => {
  return await prisma.user.findFirst({
    where: { id },
    include: {
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
}

export type UpdateUserData = Prisma.Args<typeof prisma.user, "update">["data"]

export const updateUserService = async (id: string, data: UpdateUserData) => {
  const user = await prisma.user.update({ where: { id }, data })
  return user
}

export type CreateUserData = Prisma.Args<typeof prisma.user, "create">["data"]
export const createUserService = async (data: CreateUserData) => {
  const user = await prisma.user.create({ data })
  return user
}

export const uploadImage = async (file: File, imageName: string) => {
  try {
    const bucketRef = ref(
      storage,
      `${imageName}.${mime.getExtension(file.type)}`,
    )
    const snapshot = await uploadBytes(bucketRef, file)
    const url = await getDownloadURL(snapshot.ref)
    return url
  } catch (error) {
    return false
  }
}
