"use client"

import { Sector } from "@prisma/client"
import { UserForm } from "./user-form"
import { useToast } from "@/components/ui/use-toast"
import { CreateOrUpdateUserType } from "@/types/zod"
import { createUser } from "@/actions/user"

interface CreateUserFormProps {
  sectors: Sector[]
}

export const CreateUserForm = ({ sectors }: CreateUserFormProps) => {
  const { toast } = useToast()

  const handleCreateNewUser = async (data: CreateOrUpdateUserType) => {
    const res = await createUser(data)
    console.log(res);
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
