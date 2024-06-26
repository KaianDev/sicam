"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { useTransition } from "react"

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
import { CustomSubmitButton } from "@/components/custom-submit-button"

// Utilities
import { changePasswordSchema } from "../schemas"
import { changePassword } from "../actions"
import { ChangePasswordData } from "../types"

interface ChangePasswordFormProps {
  userId: string
  hideForms: () => void
}

export const ChangePasswordForm = ({
  userId,
  hideForms,
}: ChangePasswordFormProps) => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
  })

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const res = await changePassword(userId, data)
      if (res?.message) {
        toast({
          title: "Opzz.. Ocorreu um erro.",
          description: res.message,
          variant: "destructive",
          duration: 1000,
        })
      } else {
        toast({
          title: "Sucesso!",
          description: "Senha alterada com sucesso.",
          duration: 1000,
        })
        hideForms()
      }

    })
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
                <Input
                  {...field}
                  type="password"
                  placeholder="******"
                  disabled={isPending}
                />
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
                <Input
                  {...field}
                  type="password"
                  placeholder="******"
                  disabled={isPending}
                />
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
                <Input
                  {...field}
                  type="password"
                  placeholder="******"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <CustomSubmitButton
            updateLabel="Confirma"
            formType="update"
            isPending={isPending}
          />

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
