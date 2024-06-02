"use client"

import Link from "next/link"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import type { Entity } from "@prisma/client"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CustomSubmitButton } from "@/components/custom-submit-button"

// Utilities
import { CreateOrUpdateBoxType } from "@/types/zod"
import { CreateOrUpdateBoxSchema } from "@/lib/zod"
import { cn } from "@/lib/utils"

interface BoxFormProps {
  type: "create" | "update"
  defaultValues?: {
    entityId: string
    content: string
    observation?: string
  }
  onSubmit: (data: CreateOrUpdateBoxType) => Promise<void>
  entities: Entity[]
}

export const BoxForm = ({
  defaultValues,
  type,
  entities,
  onSubmit,
}: BoxFormProps) => {
  const form = useForm<CreateOrUpdateBoxType>({
    defaultValues,
    resolver: zodResolver(CreateOrUpdateBoxSchema),
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      await onSubmit(data)
    })
  })

  return (
    <div className="pb-6">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            name="entityId"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:text-red-500 after:content-['*']">
                  Entidade
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={!!defaultValues?.entityId || isPending}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma escola ou município" />
                  </SelectTrigger>
                  <FormControl>
                    <SelectContent
                      className="max-w-[340px] sm:max-w-full"
                      align="center"
                    >
                      {entities.map((entity) => (
                        <SelectItem
                          value={entity.id}
                          key={entity.id}
                          className="max-w-[340px] sm:max-w-full"
                        >
                          <span>{entity?.uex && `${entity.uex} - `}</span>
                          {entity.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </FormControl>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-red-500 after:content-['*']">
                    Conteúdo
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite o conteúdo da sua caixa"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="observation"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observação</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite uma observação sobre o conteúdo da caixa"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-x-2">
            <CustomSubmitButton
              createLabel="Criar caixa"
              updateLabel="Editar caixa"
              formType={type}
              isPending={isPending}
            />
            {!isPending && (
              <Link
                href="/app"
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
