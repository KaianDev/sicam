"use client"

import Link from "next/link"
import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader } from "lucide-react"

import type { SendMailType } from "@/types/zod"

// Component
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Utilities
import { SendMailSchema } from "@/lib/zod"
import { cn } from "@/lib/utils"

export const SendMailForm = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<SendMailType>({
    resolver: zodResolver(SendMailSchema),
  })

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      console.log(data)
    })
  })

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
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
          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <Loader className="mr-2 size-5 animate-spin" />
              ) : (
                "Enviar e-mail"
              )}
            </Button>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Cancelar
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}
