import { FolderPlus, LogOut, Plus } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export const Aside = () => {
  return (
    <aside className="hidden flex-1 flex-col bg-green-700 sm:flex sm:max-w-20 lg:max-w-60">
      {/* User */}
      <div className="flex h-40 items-center justify-center bg-green-800 lg:h-60 lg:p-8">
        <div className=" size-16 overflow-hidden rounded-full border-2 border-zinc-200 bg-zinc-300 lg:size-40 lg:border-[10px]">
          <Image
            src="/assets/no-avatar.png"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover object-bottom"
            alt=""
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-1 flex-col items-center space-y-4 px-2 py-4 lg:p-8">
        <Button className="w-full gap-2">
          <FolderPlus />
          <div className="hidden uppercase lg:block">Adicionar</div>
        </Button>
        <Button className="w-full gap-2">
          <LogOut />
          <div className="hidden uppercase lg:block">Sair</div>
        </Button>
      </div>
    </aside>
  )
}
