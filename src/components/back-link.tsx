"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

interface BackLinkProps extends ComponentProps<"a"> {}

export const BackLink = ({ children, className, ...rest }: BackLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      className={className}
      href={pathname.includes("/app") ? "/app" : "/"}
      {...rest}
    >
      {children}
    </Link>
  )
}
