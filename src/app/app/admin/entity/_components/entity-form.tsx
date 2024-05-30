"use client"

import Link from "next/link"
import { useTransition } from "react"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"

import type { CreateOrUpdateEntityType } from "@/types/zod"

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
import { Input } from "@/components/ui/input"
import { CustomSubmitButton } from "@/components/custom-submit-button"

// Utilities
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateOrUpdateEntitySchema } from "@/lib/zod"
import { cn } from "@/lib/utils"

interface EntityFormProps {
  type: "update" | "create"
  defaultValues?: {
    name?: string
    uex?: string
  }
  onSubmit: (data: CreateOrUpdateEntityType) => Promise<void>
}

export const EntityForm = ({
  type,
  defaultValues,
  onSubmit,
}: EntityFormProps) => {
  const form = useForm<CreateOrUpdateEntityType>({
    defaultValues,
    resolver: zodResolver(CreateOrUpdateEntitySchema),
  })

  const [isPending, startTransition] = useTransition()

  const handleSubmit = form.handleSubmit(async (data) => {
    startTransition(async () => {
      await onSubmit(data)
      form.reset({
        name: "",
        uex: "",
      })
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
                    disabled={isPending}
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
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-x-2">
            <CustomSubmitButton
              createLabel="Criar entidade"
              updateLabel="Editar entidade"
              formType={type}
              isPending={isPending}
            />
            {!isPending && (
              <Link
                href={type === "create" ? "/app" : "/app/admin/entity"}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-black ",
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
