"use client"

import { ChangeEvent, useTransition } from "react"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"

import type { User } from "@prisma/client"
import type { ProfileAvatarData } from "../types"

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
import { profileAvatarFormSchema } from "../schemas"
import { changeProfileImage, removeProfileImage } from "../actions"
import { cn } from "@/lib/utils"

interface SwitchAvatarFormProps {
  user: User
  preview: string
  setPreview: (path: string) => void
}

export const SwitchAvatarForm = ({
  user,
  preview,
  setPreview,
}: SwitchAvatarFormProps) => {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  const form = useForm<ProfileAvatarData>({
    resolver: zodResolver(profileAvatarFormSchema),
  })

  const avatarInputRef = form.register("avatar")

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    avatarInputRef.onChange(e)
    const files = e.target.files
    if (files && files?.length > 0) {
      const file = files[0]
      const imagepath = URL.createObjectURL(file)
      setPreview(imagepath)
    }
  }

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const formData = new FormData()
      formData.append("avatar", data.avatar)
      formData.append("id", user.id)
      const res = await changeProfileImage(formData)
      if (res?.message) {
        toast({
          title: "Opzz..",
          description: res.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Sucesso!",
          description: "Imagem alterada com sucesso.",
        })
        setPreview("")
      }
    })
  })

  const handleRemoveProfileImage = () => {
    startTransition(async () => {
      await removeProfileImage(user.id)
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormField
            control={form.control}
            name="avatar"
            render={() => (
              <FormItem>
                {!isPending && (
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
                )}
                <FormControl>
                  <Input
                    {...avatarInputRef}
                    onChange={handleSelectFile}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {preview && (
            <div className="flex flex-col gap-4">
              <Button type="submit" variant="secondary" disabled={isPending}>
                {isPending && <Loader className="mr-2 animate-spin" />}
                Salvar
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="text-black"
                onClick={() => setPreview("")}
                disabled={isPending}
              >
                Cancelar
              </Button>
            </div>
          )}
        </form>
      </Form>
      {user.avatar && (
        <Button
          onClick={handleRemoveProfileImage}
          variant="secondary"
          disabled={isPending}
        >
          Remover imagem
        </Button>
      )}
    </div>
  )
}
