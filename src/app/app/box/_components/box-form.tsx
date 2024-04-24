"use client"

import { useForm } from "react-hook-form"

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

interface BoxFormProps {
  defaultValues?: {
    content: string
    entity: string
    observation?: string
  }
}

export const BoxForm = ({ defaultValues }: BoxFormProps) => {
  const form = useForm({
    defaultValues,
  })

  const handleAddNewBoxSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="pb-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleAddNewBoxSubmit)}
          className="space-y-8"
        >
          <FormField
            name="entity"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:text-red-500 after:content-['*']">
                  Entidade
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
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
          <Button type="submit">Criar Caixa</Button>
        </form>
      </Form>
    </div>
  )
}
