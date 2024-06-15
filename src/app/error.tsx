"use client"

import { Button } from "@/components/ui/button"
import { TriangleAlert } from "lucide-react"

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <TriangleAlert size={100} className="text-primary" />
      <h2 className="text-xl text-center max-w-[500px]">Ocorreu um erro durante o carregamento dos dados, tente novamente.</h2>
      <Button onClick={() => reset()}>Tentar novamente</Button>
    </div>
  )
}

export default Error
