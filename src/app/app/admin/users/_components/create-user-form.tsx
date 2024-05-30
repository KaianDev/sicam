"use client"

import type { CreateUserType } from "@/types/zod"

import Link from "next/link"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname } from "next/navigation"
import { Role, Sector } from "@prisma/client"

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
import { useToast } from "@/components/ui/use-toast"

// Utilities
import { cn } from "@/lib/utils"
import { CreateUserSchema } from "@/lib/zod"
import { createUser } from "@/actions/user"

interface CreateUserFormProps {
  sectors: Sector[]
}

export const CreateUserForm = ({ sectors }: CreateUserFormProps) => {
  const { toast } = useToast()
  const pathname = usePathname()

  const form = useForm<CreateUserType>({
    resolver: zodResolver(CreateUserSchema),
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const res = await createUser(data)
      if (res?.message) {
        toast({
          title: "Opzz.. Ocorreu um erro.",
          description: res.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Sucesso!",
          description: "Usuário criado com sucesso.",
        })
      }
      form.reset({
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

            {sectors && sectors.length > 0 && (
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
            )}

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
          </div>

          <div className="space-x-2">
            <CustomSubmitButton
              type="submit"
              createLabel="Criar usuário"
              formType={"create"}
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
