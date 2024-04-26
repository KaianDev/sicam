"use client"

import { useForm } from "react-hook-form"

import type { CreateOrUpdateEntityType } from "@/types/zod"

// Components
import { Button } from "@/components/ui/button"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateOrUpdateEntitySchema } from "@/lib/zod"

interface EntityFormProps {
  defaultValues?: {
    name?: string
    uex?: string
  }
  onSubmit: (data: CreateOrUpdateEntityType) => void
}

export const EntityForm = ({ defaultValues, onSubmit }: EntityFormProps) => {
  const form = useForm<CreateOrUpdateEntityType>({
    defaultValues,
    resolver: zodResolver(CreateOrUpdateEntitySchema),
  })

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data)
    form.reset({
      name: "",
      uex: "",
    })
  })

  return (
    <div className="pb-6">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:text-red-500 after:content-['*']">
                  Nome da Entidade
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o nome da escola ou município"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="uex"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Unidade Executora{" "}
                  <small>(Obrigatório quando for escola)</small>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite número da Unidade Executora"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary">
            Criar entidade
          </Button>
        </form>
      </Form>
    </div>
  )
}
