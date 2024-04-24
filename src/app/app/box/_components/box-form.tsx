"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// U
import { CreateOrUpdateBoxSchema, CreateOrUpdateBoxType } from "@/types/zod"
import Link from "next/link"

interface BoxFormProps {
  type: "create" | "update"
  defaultValues?: {
    entityId: string
    content: string
    observation?: string
  }
  onSubmit: (data: CreateOrUpdateBoxType) => void
}

export const BoxForm = ({ defaultValues, type, onSubmit }: BoxFormProps) => {
  // const user = useSession()

  const form = useForm<CreateOrUpdateBoxType>({
    defaultValues: {
      ...defaultValues,
      ownerId: "123",
      sectorId: "CEGAF",
    },
    resolver: zodResolver(CreateOrUpdateBoxSchema),
  })

  return (
    <div className="pb-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  disabled={!!defaultValues?.entityId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma escola ou município" />
                  </SelectTrigger>
                  <FormControl>
                    <SelectContent>
                      <SelectItem
                        value={"EEMTI Professora Theolina de Murylo Zacas"}
                      >
                        EEMTI Professora Theolina de Murylo Zacas
                      </SelectItem>
                      <SelectItem value={"Acaraú"}>Acaraú</SelectItem>
                      <SelectItem value={"Itarema"}>Itarema</SelectItem>
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-x-2">
            <Button type="submit" variant="secondary">
              {type === "create" ? "Criar Caixa" : "Editar Caixa"}
            </Button>
            {type === "update" && (
              <Link
                href="/app"
                className="rounded-md bg-primary p-2 text-white"
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
