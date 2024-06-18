"use client"

import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Role, Sector } from "@prisma/client"
import { usePathname } from "next/navigation"

import type { UserWithOutPassword } from "@/types/user"
import type { UpdateUserWithOutPasswordData } from "../types"

// Components
import { buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CustomSubmitButton } from "@/components/custom-submit-button"
import { Input } from "@/components/ui/input"

// Utilities
import { cn } from "@/lib/utils"
import { updateUser } from "../actions"
import { updateUserWithOutPasswordSchema } from "../schemas"
import { UserStatus } from "@/lib/zod"

interface UpdateUserFormProps {
  user: UserWithOutPassword
  sectors: Sector[]
}

export const UpdateUserForm = ({ user, sectors }: UpdateUserFormProps) => {
  const pathname = usePathname()
  const { toast } = useToast()

  const form = useForm<UpdateUserWithOutPasswordData>({
    defaultValues: {
      name: user.name,
      email: user.email,
      role: user.role,
      sectorId: user.sectorId,
      active: user.active,
    },
    resolver: zodResolver(updateUserWithOutPasswordSchema),
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const res = await updateUser(user.id, data)
      if (res?.message) {
        toast({
          title: "Opzz.. Ocorreu um erro.",
          description: res.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Sucesso!",
          description: "Usuário atualizado com sucesso.",
        })
      }
    })
  })

  return (
    <div className="pb-6">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome do usuário"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o e-mail do usuário"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="sectorId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    Setor
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending || !pathname.includes("/admin")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o setor do usuário" />
                    </SelectTrigger>
                    <FormControl>
                      <SelectContent
                        className="max-w-[340px] sm:max-w-full"
                        align="center"
                      >
                        {sectors.map((sector) => (
                          <SelectItem
                            value={sector.id}
                            key={sector.id}
                            className="max-w-[340px] sm:max-w-full"
                          >
                            {sector.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </FormControl>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="role"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    Perfil
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isPending}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um perfil" />
                      </SelectTrigger>
                      <FormControl>
                        <SelectContent>
                          <SelectItem value={Role.USER}>Usuário</SelectItem>
                          <SelectItem value={Role.ADMIN}>
                            Administrador
                          </SelectItem>
                        </SelectContent>
                      </FormControl>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="active"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    Status
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        field.value ? UserStatus.ACTIVE : UserStatus.INACTIVE
                      }
                      disabled={isPending}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um perfil" />
                      </SelectTrigger>
                      <FormControl>
                        <SelectContent>
                          <SelectItem value={UserStatus.ACTIVE}>
                            Ativado
                          </SelectItem>
                          <SelectItem value={UserStatus.INACTIVE}>
                            Desativado
                          </SelectItem>
                        </SelectContent>
                      </FormControl>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-x-2">
            <CustomSubmitButton
              type="submit"
              updateLabel="Editar usuário"
              formType={"update"}
              isPending={isPending}
            />
            {!isPending && (
              <Link
                href="/app/admin/users"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-black",
                )}
              >
                Cancelar
              </Link>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
