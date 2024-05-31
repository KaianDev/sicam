"use client"

import { useState } from "react"

import type { User } from "@prisma/client"

// Components
import { SwitchAvatarForm } from "./switch-avatar-form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface AvatarProps {
  user: User
}

export const ProfileAvatar = ({ user }: AvatarProps) => {
  const [preview, setPreview] = useState("")

  const avatarImage = preview
    ? preview
    : user.avatar
      ? user.avatar
      : "/assets/default.png"

  return (
    <div className="flex flex-col gap-4 sm:flex-row ">
      <div className="mx-auto size-36 min-w-32 border-2 border-dotted sm:size-48">
        <Avatar className="size-full rounded-none">
          <AvatarFallback>
            <div className="flex size-full items-center justify-center bg-green-400 text-8xl text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </AvatarFallback>
          <AvatarImage
            src={avatarImage}
            alt={`Foto de perfil de(a) ${user.name}`}
            className="object-cover"
          />
        </Avatar>
      </div>
      <SwitchAvatarForm user={user} preview={preview} setPreview={setPreview} />
    </div>
  )
}
