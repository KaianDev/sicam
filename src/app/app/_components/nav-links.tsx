"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Utilities
import { links } from "@/lib/links"
import { cn } from "@/lib/utils"

export const NavLinks = () => {
  const pathname = usePathname()

  return (
    <div className="flex h-full max-h-screen flex-col items-center gap-3 px-2 py-4 lg:p-4">
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <Link
            href={link.href}
            key={link.label}
            className={cn(
              "flex w-full items-center gap-2 rounded-md bg-green-800 p-2 font-medium text-white hover:bg-green-100 hover:text-green-800 sm:justify-center lg:justify-start",
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
