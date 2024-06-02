"use client"

import { useState } from "react"

// Components
import { SwitchAvatarForm } from "./switch-avatar-form"
import { CustomAvatar } from "@/components/custom-avatar"
import type { UserWithSector } from "@/types/user"

interface ProfileAvatarProps {
  user: UserWithSector
}

export const ProfileAvatar = ({ user }: ProfileAvatarProps) => {
  const [preview, setPreview] = useState("")

  const avatarImage = preview
    ? preview
    : user?.avatar
      ? user.avatar
      : "/assets/default.png"

  return (
    <div className="flex flex-col gap-4 sm:flex-row ">
      <div className="mx-auto size-36 min-w-32 border-2 border-dotted sm:size-48">
        <CustomAvatar userName={user?.name} src={avatarImage} />
      </div>
      <SwitchAvatarForm user={user} preview={preview} setPreview={setPreview} />
    </div>
  )
}
