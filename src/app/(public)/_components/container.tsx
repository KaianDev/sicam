import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const Container = ({ children, className }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "container mx-auto my-10 min-h-[calc(100vh-200px)] space-y-10 rounded-md bg-white px-0 pb-8 pt-4 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
