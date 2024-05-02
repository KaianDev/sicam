"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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

// Utilities
import { CreateOrUpdateSectorSchema } from "@/lib/zod"

interface SectorFormProps {
  type: "create" | "update"
  defaultValues?: {
    name?: string
  }
  onSubmit: (data: CreateOrUpdateSectorType) => void
}

export const SectorForm = ({
  type,
  defaultValues,
  onSubmit,
}: SectorFormProps) => {
  const form = useForm<CreateOrUpdateSectorType>({
    defaultValues,
    resolver: zodResolver(CreateOrUpdateSectorSchema),
  })
  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data)
    form.reset({
      name: "",
    })
  })

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
                  <Input placeholder="Digite o nome do setor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-x-2">
            <Button variant="secondary">
              {type === "create" ? "Criar setor" : "Editar setor"}
            </Button>
            {type === "update" && (
              <Link href="/app/admin/sector" className={buttonVariants()}>
                Cancelar
              </Link>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
