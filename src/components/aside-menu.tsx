"use client"

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { FolderPlus, LogOut, Menu } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface AsideMenu {
  user: any
}

export const AsideMenu = ({ user }: AsideMenu) => {
  const pathname = usePathname()
  if (pathname === "/") return null

  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-12" variant="ghost" size="icon">
            <Menu size={30} />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <div className="flex items-center gap-4 py-2">
              <Avatar>
                <AvatarFallback></AvatarFallback>
                <AvatarImage src="/assets/no-avatar.png"></AvatarImage>
              </Avatar>
              <div>
                <SheetTitle>{user.name}</SheetTitle>
                <SheetDescription className="text-start">
                  {user.role === "user" ? "Analista" : "Admin"}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <div className="flex flex-1 flex-col gap-4 border-t-2 py-6">
            <Button variant="secondary" className="gap-4">
              <FolderPlus />
              <div>Adicionar</div>
            </Button>
            <Button className="mt-auto gap-4">
              <LogOut />
              <div>Sair</div>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
