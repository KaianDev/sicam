"use client"

import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { UpdateProfileData } from "../types"

import type { UserWithSector } from "@/types/user"

// Components
import { useToast } from "@/components/ui/use-toast"
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
import { updateUserProfileSchema } from "../schemas"
import { updateProfile } from "../actions"
import { useRouter } from "next/navigation"

interface UpdateDataFormProps {
  user: UserWithSector
  hideForms: () => void
}

export const UpdateDataForm = ({ user, hideForms }: UpdateDataFormProps) => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const router = useRouter()

  const form = useForm<UpdateProfileData>({
    resolver: zodResolver(updateUserProfileSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  })

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const res = await updateProfile(data)
      if (res?.message) {
        toast({
          title: "Opzz.. Ocorreu um erro.",
          description: res.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Sucesso!",
          description: "Dados alterados com sucesso.",
        })
        hideForms()
        router.refresh()
      }
    })
  })

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
            disabled={isPending}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  )
}
