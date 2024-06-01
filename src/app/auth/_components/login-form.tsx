"use client"

import Link from "next/link"
import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

import type { LoginSchema } from "@/types/zod"

// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"

// Utilities
import { loginSchema } from "@/lib/zod"
import { cn } from "@/lib/utils"
import { login } from "../actions"

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleLoginSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const res = await login(data)
      if (res?.message) {
        toast({
          title: "Opz.. ",
          description: res.message,
        })
      } else {
        toast({
          title: "Usuário logado com sucesso!",
        })
        router.replace("/app")
      }
    })
  })

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleLoginSubmit}>
          <div className="space-y-6">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu e-mail"
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
                  <div className="flex justify-between">
                    <FormLabel>Senha</FormLabel>
                    <Link
                      href="/auth/send-mail"
                      className="block w-max text-sm underline hover:text-primary"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <Loader className="mr-2 size-5 animate-spin" />
                ) : (
                  "Entrar"
                )}
              </Button>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Voltar para o início
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
