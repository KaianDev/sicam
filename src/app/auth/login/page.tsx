import { LoginForm } from "@/components/login-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-200">
      <Card className="w-[90%] overflow-hidden sm:max-w-lg">
        <CardHeader className="bg-green-700 p-6 py-3">
          <Image
            src="/assets/logo.png"
            alt="Logo SiCAM"
            width={0}
            height={0}
            sizes="100vw"
            className="-ml-2 w-32"
          />
        </CardHeader>
        <CardContent className="py-4">
          <CardTitle>Faça seu Login</CardTitle>
          <CardDescription>Use suas credenciais e faça o login</CardDescription>
          <div className="py-4">
            <LoginForm />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
