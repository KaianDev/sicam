import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"
import { storage } from "@/lib/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import mime from "mime"

export const getAllUsers = async () => {
  try {
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
    if (!users) return []
    return users
  } catch (error) {
    return false
  }
}

export const getUserByEmail = async (email: string) => {
  try {
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
    if (!user) return false
    return user
  } catch (error) {
    return false
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
      include: {
        sector: {
          select: {
            name: true,
          },
        },
      },
    })
    if (!user) return false
    return user
  } catch (error) {
    return false
  }
}

export type UpdateUserData = Prisma.Args<typeof prisma.user, "update">["data"]

export const updateUserService = async (id: string, data: UpdateUserData) => {
  try {
    const user = await prisma.user.update({ where: { id }, data })
    if (!user) return false
    return user
  } catch (error) {
    return false
  }
}

export type CreateUserData = Prisma.Args<typeof prisma.user, "create">["data"]
export const createUserService = async (data: CreateUserData) => {
  try {
    const user = await prisma.user.create({ data })
    if (!user) return false
    return user
  } catch (error) {
    return false
  }
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
