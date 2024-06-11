"use client"

import { Entity, Sector } from "@prisma/client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"

interface FilterFormProps {
  entities: Entity[]
  sectors: Sector[]
}

const formFilterSchema = z.object({
  content: z.string().trim().optional(),
  entity: z.string().trim().optional(),
  sector: z.string().trim().optional(),
})

export const FilterForm = ({ entities, sectors }: FilterFormProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const path = pathname.includes("/app") ? "/app" : pathname
  const searchParams = useSearchParams()
  const form = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      content: searchParams.get("search") || "",
      entity: searchParams.get("entity") || "",
      sector: searchParams.get("sector") || "",
    },
  })

  const handleFilterSubmit = form.handleSubmit(async (data) => {
    const params = new URLSearchParams(searchParams)
    const { content, entity, sector } = data
    if (params.has("page")) params.delete("page")
    if (content) params.set("search", content)
    if (entity) params.set("entity", entity)
    if (sector) params.set("sector", sector)
    router.replace(`${path}?${params.toString()}`)
  })

  const handleResetFilterFields = () => {
    form.reset({
      content: "",
      entity: "",
      sector: "",
    })
  }

  const { content, entity, sector } = form.getValues()
  const hasValue = !!content || !!entity || !!sector

  return (
    <div className="pb-4">
      <Form {...form}>
        <form onSubmit={handleFilterSubmit} className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conteúdo</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      title="text"
                      placeholder="Nº do Processo ou NE"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="sector"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Setor</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        list="sectors"
                        placeholder="Informe o setor"
                      />
                      <datalist id="sectors">
                        {sectors.map((sector) => (
                          <option key={sector.id}>{sector.name}</option>
                        ))}
                      </datalist>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="entity"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entidade</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        list="entities"
                        placeholder="Informe a entidade"
                      />
                      <datalist id="entities">
                        {entities.map((entities) => (
                          <option key={entities.id}>{entities.name}</option>
                        ))}
                      </datalist>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-x-4">
            <Button disabled={!hasValue} type="submit" variant="secondary">
              Pesquisar
            </Button>

            {hasValue && (
              <Button
                type="button"
                variant="outline"
                onClick={handleResetFilterFields}
              >
                Limpar campos de filtro
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
