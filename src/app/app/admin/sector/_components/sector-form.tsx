"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTransition } from "react"

import type { CreateOrUpdateSectorType } from "@/types/zod"

// Components
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
import { CustomSubmitButton } from "@/components/custom-submit-button"

// Utilities
import { CreateOrUpdateSectorSchema } from "@/lib/zod"
import { cn } from "@/lib/utils"

interface SectorFormProps {
  type: "create" | "update"
  defaultValues?: {
    name?: string
  }
  onSubmit: (data: CreateOrUpdateSectorType) => Promise<void>
}

export const SectorForm = ({
  type,
  defaultValues,
  onSubmit,
}: SectorFormProps) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<CreateOrUpdateSectorType>({
    defaultValues,
    resolver: zodResolver(CreateOrUpdateSectorSchema),
  })
  const handleSubmit = form.handleSubmit((data) =>
    startTransition(async () => {
      await onSubmit(data)
      form.reset({
        name: "",
      })
    }),
  )

  return (
    <div className="pb-6">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o nome do setor"
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
              createLabel="Criar setor"
              updateLabel="Editar setor"
              formType={type}
              isPending={isPending}
            />
            {!isPending && (
              <Link
                href="/app/admin/sector"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-black",
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
