import Image from "next/image"

// Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LoginForm } from "./login-form"

export const LoginDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">Entrar</Button>
        </DialogTrigger>
        <DialogContent className="w-[90%] overflow-hidden rounded-md p-0">
          <DialogHeader className="bg-green-700 p-6 py-3">
            <Image
              src="/assets/logo.png"
              alt="Logo SiCAM"
              width={0}
              height={0}
              sizes="100vw"
              className="-ml-2 w-32"
            />
          </DialogHeader>

          <div className="px-6 pb-6">
            <div className="pb-3">
              <DialogTitle>Faça seu Login</DialogTitle>
              <DialogDescription>
                Use suas credenciais e faça o login
              </DialogDescription>
            </div>
            <LoginForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
