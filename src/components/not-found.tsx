import { ArrowLeft, FolderX } from "lucide-react"

// Components
import { BackLink } from "./back-link"

// Utilities
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

export const NotFound = () => {
  return (
    <div className="container mt-20 flex flex-1 flex-col items-center gap-8 px-0 py-2 bg-fuchsia-50">
      <FolderX size={150} className="text-primary" />
      <div className="space-y-2">
        <h1 className="text-center text-8xl font-bold">404</h1>
        <p className="text-center">
          A página que está tentando <br />
          acessar não existe
        </p>
      </div>
      <div>
        <BackLink className={cn(buttonVariants())}>
          <ArrowLeft />
          Voltar
        </BackLink>
      </div>
    </div>
  )
}
