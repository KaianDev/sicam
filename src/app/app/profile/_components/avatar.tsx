"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

// Components
import { buttonVariants } from "@/components/ui/button"
import { SwitchAvatarForm } from "./switch-avatar-form"

interface AvatarProps {
  user: User
}

export const Avatar = ({ user }: AvatarProps) => {
  const [preview, setPreview] = useState("")

  const avatarImage = preview ? preview : user.avatar ? user.avatar : "/assets/default.png"

  return (
    <div className="flex flex-col gap-4 sm:flex-row ">
      <div className="relative mx-auto size-36 min-w-32 border-2 border-dotted sm:size-48">
        <Image
          src={avatarImage}
          alt={`Foto de perfil de(a) ${user.name}`}
          className="object-cover"
          fill
        />
      </div>

      <div className="flex flex-col gap-4">
        <SwitchAvatarForm user={user} preview={preview} setPreview={setPreview} />
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
