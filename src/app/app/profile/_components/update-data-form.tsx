"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { User } from "@prisma/client"
import type { UpdateProfileData } from "@/types/zod"

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
import { UpdateUserProfileSchema } from "@/lib/zod"

interface UpdateDataFormProps {
  user: User
  hideForms: () => void
}

export const UpdateDataForm = ({ user, hideForms }: UpdateDataFormProps) => {
  const form = useForm<UpdateProfileData>({
    resolver: zodResolver(UpdateUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })

  const handleSubmit = form.handleSubmit((data) => {})

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Digite seu nome" />
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
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Digite seu e-mail" />
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
