import Link from "next/link"
import { Container } from "./container"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { ArrowLeft, ShieldX } from "lucide-react"

export const NotAuthorized = () => {
  return (
    <Container>
      <div className="container mt-20 flex flex-1 flex-col items-center gap-8 px-0 py-2 sm:mt-0 sm:justify-center">
        <ShieldX size={100} className="text-primary" />
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-bold">
            Acesso não permitido!
          </h1>
          <p className="text-center">
            Você não possui permissão <br />
            para acessar essa página
          </p>
        </div>
        <div>
          <Link href={"/app"} className={cn(buttonVariants())}>
            <ArrowLeft />
            Voltar
          </Link>
        </div>
      </div>
    </Container>
  )
}
