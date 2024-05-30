"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { ChangePasswordData } from "@/types/zod"

// Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Utilities
import { ChangePasswordSchema } from "@/lib/zod"

interface ChangePasswordFormProps {
  userId: string
  hideForms: () => void
}

export const ChangePasswordForm = ({
  userId,
  hideForms,
}: ChangePasswordFormProps) => {
  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(ChangePasswordSchema),
  })

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          name="oldPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha atual</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="******" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="newPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova senha</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="******" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirma nova senha</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="******" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button type="submit" variant="secondary">
            Salvar
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="text-black"
            onClick={hideForms}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  )
}
