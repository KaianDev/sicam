"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SwitchAvatarForm } from "./switch-avatar-form"

interface AvatarProps {
  user: User
}

export const Avatar = ({ user }: AvatarProps) => {
  const [preview, setPreview] = useState("")

  const avatarImage = user.avatar
    ? user.avatar
    : preview
      ? preview
      : "/assets/default.png"

  return (
    <div className="flex flex-row gap-4">
      <div className="relative min-w-32 size-36 sm:size-48 border-2 border-dotted">
        <Image
          src={avatarImage}
          alt={`Foto de perfil de(a) ${user.name}`}
          className="object-cover"
          fill
        />
      </div>

      <div className="flex flex-col gap-4">
        <SwitchAvatarForm preview={preview} setPreview={setPreview} />
        {user.avatar && (
          <Link
            href=""
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Remover imagem
          </Link>
        )}
      </div>

    </div>
  )
}
