"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { LoginSchema } from "@/types/zod"

// Utilities
import { loginSchema } from "@/lib/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"

export const LoginForm = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleLoginSubmit = async (data: LoginSchema) => {
    console.log(data)
  }

  return (
    <div>
      <Form {...form}>
        <form method="POST" onSubmit={form.handleSubmit(handleLoginSubmit)}>
          <div className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail" {...field} />
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
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Link href="/" className="mb-4 block w-max text-sm hover:underline">
            Esqueceu a senha?
          </Link>
          <Button>Entrar</Button>
        </form>
      </Form>
    </div>
  )
}
