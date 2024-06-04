import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const Title = ({
  children,
  className,
  ...rest
}: ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        className,
        "border-b border-zinc-300 pb-4 text-3xl font-semibold",
      )}
      {...rest}
    >
      {children}
    </h1>
  )
}
