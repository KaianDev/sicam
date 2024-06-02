"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Utilities
import { getLinks } from "@/lib/links"
import { cn } from "@/lib/utils"
import { Role } from "@prisma/client"

interface NavLinksProps {
  userRole: Role
}

export const NavLinks = ({ userRole }: NavLinksProps) => {
  const pathname = usePathname()
  const links = getLinks(userRole)

  return (
    <div className="flex max-h-screen flex-1 flex-col items-center gap-2 lg:gap-3">
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <Link
            href={link.href}
            key={link.label}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-md bg-green-800 p-2 font-medium text-white hover:bg-green-100 hover:text-green-800 lg:justify-start",
              pathname === link.href && "bg-green-100 text-green-800",
            )}
          >
            <LinkIcon />
            <span className="hidden lg:block">{link.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
