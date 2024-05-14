"use client"

import type { Sector } from "@prisma/client"
import type { CreateUserType } from "@/types/zod"

// Components
import { UserForm } from "./user-form"
import { useToast } from "@/components/ui/use-toast"

// Utilities
import { createUser } from "@/actions/user"

interface CreateUserFormProps {
  sectors: Sector[]
}

export const CreateUserForm = ({ sectors }: CreateUserFormProps) => {
  const { toast } = useToast()

  const handleCreateNewUser = async (data: CreateUserType) => {
    const res = await createUser(data)
    if (res?.message) {
      toast({
        title: "Opzz.. Ocorreu um erro.",
        description: res.message,
      })
    } else {
      toast({
        title: "Sucesso!",
        description: "Usuário criado com sucesso.",
      })
    }
    console.log({ "Chamando a função createUser": data })
  }

  return (
    <UserForm type="create" sectors={sectors} onSubmit={handleCreateNewUser} />
  )
}
