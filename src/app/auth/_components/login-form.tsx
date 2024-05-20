"use client"

import Link from "next/link"
import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { LoginSchema } from "@/types/zod"

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

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleLoginSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      console.log(data)
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
                      className="block w-max text-sm hover:underline"
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
              <Button type="submit" className="w-full">
                Entrar
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
