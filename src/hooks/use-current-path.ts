"use client"

import { usePathname } from "next/navigation"

export const useCurrentPath = () => {
  const pathname = usePathname()
  const path = pathname.includes("/app") ? "/app" : pathname
  return path
}
