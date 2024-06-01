"use server"

import { signIn } from "@/auth"
import { LoginSchema } from "@/types/zod"
import { CredentialsSignin } from "next-auth"

export const login = async (data: LoginSchema) => {
  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { message: "Falha ao fazer login" }
    }
    return { message: "Ocorreu um erro desconhecido" }
  }
}
