import Image from "next/image"
import { LogOut } from "lucide-react"

// Components
import { Button } from "@/components/ui/button"

export const AsideUser = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-green-800 px-2 py-4 lg:h-60 lg:p-8">
      <Image
        src="/assets/no-avatar.png"
        width={140}
        height={140}
        sizes="100vw"
        className="rounded-full border-4 border-zinc-50 bg-zinc-300 object-cover object-bottom"
        alt="default"
      />
      <Button className="flex w-full items-center gap-2 px-2 sm:justify-center lg:w-max">
        <LogOut />
        <span className="hidden uppercase lg:block">Sair</span>
      </Button>
    </div>
  )
}
