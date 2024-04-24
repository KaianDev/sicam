"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

// Components
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogOut, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Utilities
import { links } from "@/lib/links"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface AsideMenu {
  user: any
}

export const AsideMenu = ({ user }: AsideMenu) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  if (pathname === "/") return null

  const handleLinkClick = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
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
                <AvatarImage src="/assets/default.png"></AvatarImage>
              </Avatar>
              <div>
                <SheetTitle>{user.name}</SheetTitle>
                <SheetDescription className="text-start">
                  {user.role === "user" ? "Analista" : "Admin"}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <div className="flex flex-1 flex-col border-t-2 py-6">
            <div className="flex flex-col gap-4">
              {links.map((link) => {
                const LinkIcon = link.icon
                return (
                  <Button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      "flex items-center gap-2 rounded-md bg-green-800 p-2 font-medium text-white hover:bg-green-100 hover:text-green-800 sm:justify-center lg:justify-start",
                      pathname === link.href && "bg-green-100 text-green-800",
                    )}
                  >
                    <LinkIcon />
                    {link.label}
                  </Button>
                )
              })}
            </div>
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
