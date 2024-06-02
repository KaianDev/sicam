"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

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
import { getLinks } from "@/lib/links"
import { cn } from "@/lib/utils"
import { logout } from "@/actions/auth"
import { UserWithSector } from "@/types/user"
import { CustomAvatar } from "./custom-avatar"

interface AsideMenuProps {
  user?: UserWithSector
}

export const AsideMenu = ({ user }: AsideMenuProps) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  if (!user) return

  const links = getLinks(user.role)

  const handleLinkClick = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  const handleLogout = async () => {
    await logout()
  }

  const avatarImage = user.avatar ?? "/assets/default.png"

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
              {/* <Avatar>
                <AvatarFallback></AvatarFallback>
                <AvatarImage src="/assets/default.png"></AvatarImage>
              </Avatar> */}
              <div className="size-12 overflow-hidden rounded-full border-2 border-zinc-300">
                <CustomAvatar src={avatarImage} userName={user.name} />
              </div>
              <div>
                <SheetTitle>{user.name}</SheetTitle>
                <SheetDescription className="text-start">
                  {user.sector.name}
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
                      "flex items-center justify-start gap-2 rounded-md bg-green-800 p-2 font-medium text-white hover:bg-green-100 hover:text-green-800 ",
                      pathname === link.href && "bg-green-100 text-green-800",
                    )}
                  >
                    <LinkIcon />
                    {link.label}
                  </Button>
                )
              })}
            </div>
            <Button onClick={handleLogout} className="mt-auto gap-4">
              <LogOut />
              Sair
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
