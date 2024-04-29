import { Diamond } from "lucide-react"

interface SubtitleProps {
  label: string
}

export const Subtitle = ({ label }: SubtitleProps) => {
  return (
    <h2 className="flex w-fit items-center gap-2 text-xl font-medium">
      <Diamond className="size-4 text-primary" strokeWidth={4} />
      {label}
    </h2>
  )
}
