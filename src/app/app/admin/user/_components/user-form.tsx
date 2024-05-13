"use client"

import Link from "next/link"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Role, Sector } from "@prisma/client"
import type { CreateOrUpdateUserType } from "@/types/zod"

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
import { CreateOrUpdateUserSchema } from "@/lib/zod"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface UserFormProps {
  type: "create" | "update"
  defaultValues?: {
    name?: string
    email?: string
    role?: Role
    sectorId?: string
  }
  onSubmit: (data: CreateOrUpdateUserType) => Promise<void>
  sectors: Sector[]
}

export const UserForm = ({
  type,
  sectors,
  defaultValues,
  onSubmit,
}: UserFormProps) => {
  const pathname = usePathname()

  const form = useForm<CreateOrUpdateUserType>({
    defaultValues: {
      ...defaultValues,
      role: Role.USER,
    },
    resolver: zodResolver(CreateOrUpdateUserSchema),
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      await onSubmit(data)
      form.reset({
        avatar: undefined,
        role: Role.USER,
        email: "",
        name: "",
        password: "",
        sectorId: undefined,
      })
    })
  })

  return (
    <div className="pb-6">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FormField
              name="avatar"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avatar</FormLabel>
                  <FormControl>
                    <Input type="file" disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite a senha do usuário"
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

            {type === "create" && (
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
            )}
          </div>
          <div className="space-x-2">
            <CustomSubmitButton
              type="submit"
              createLabel="Criar usuário"
              updateLabel="Editar usuário"
              formType={type}
              isPending={isPending}
            />
            {!isPending && (
              <Link
                href="/app"
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
