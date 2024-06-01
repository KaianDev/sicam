import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CustomAvatarProps {
  src?: string
  userName: string | undefined
}

export const CustomAvatar = ({ src, userName }: CustomAvatarProps) => {
  return (
    <Avatar className="size-full rounded-none">
      <AvatarFallback>
        <div className="flex size-full items-center justify-center bg-green-400 text-3xl sm:text-8xl text-white">
          {userName?.charAt(0).toUpperCase()}
        </div>
      </AvatarFallback>
      <AvatarImage
        src={src}
        alt={`Foto de perfil de(a) ${userName}`}
        className="object-cover"
      />
    </Avatar>
  )
}
