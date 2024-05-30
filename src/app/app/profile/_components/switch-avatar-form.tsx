"use client"

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
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Save, X } from "lucide-react"
import { ChangeEvent } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const AvatarFormSchema = z.object({
  avatar:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .transform((list) => list.item(0)!)
          .refine(
            (file) => file.size <= 2 * 1024 * 1024,
            "Tamanho máximo permitido de 2Mb",
          ),
})

type AvatarFormData = z.infer<typeof AvatarFormSchema>

interface SwitchAvatarFormProps {
  preview: string
  setPreview: (path: string) => void
}

export const SwitchAvatarForm = ({
  preview,
  setPreview,
}: SwitchAvatarFormProps) => {
  const form = useForm<AvatarFormData>({
    resolver: zodResolver(AvatarFormSchema),
  })

  const avatarInputRef = form.register("avatar")

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    avatarInputRef.onChange(e)
    const files = e.target.files
    if (files && files?.length > 0) {
      const file = files[0]
      console.log(file.size)
      const imagepath = URL.createObjectURL(file)
      console.log(imagepath)
      setPreview(imagepath)
    }
  }

  const handleSubmit = form.handleSubmit((data) => {
    // TODO: Fazer verificação do tipo e serviço de upload
  })

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="avatar"
          render={() => (
            <FormItem>
              <FormLabel>
                <span
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full cursor-pointer",
                  )}
                >
                  Alterar imagem
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  {...avatarInputRef}
                  onChange={handleSelectFile}
                  type="file"
                  className="hidden"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {preview && (
          <div className="grid grid-cols-2 gap-4">
            <Button type="submit" variant="secondary">
              <Save className="mr-0 sm:mr-2" />
              <span className="hidden sm:inline">Salvar</span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="text-black"
              onClick={() => setPreview("")}
            >
              <X className="mr-0 sm:mr-2" />
              <span className="hidden sm:inline">Cancelar</span>
            </Button>
          </div>
        )}
      </form>
    </Form>
  )
}
