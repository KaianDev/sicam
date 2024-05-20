import Image from "next/image"

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AuthCardProps {
  children: React.ReactNode
  title: string
  description?: string
}

export const AuthCard = ({ children, title, description }: AuthCardProps) => {
  return (
    <Card className="w-[90%] overflow-hidden sm:max-w-md">
      <CardHeader className="bg-green-700 p-6 py-3">
        <div className="h-14">
          <Image
            src="/assets/logo.png"
            alt="Logo SiCAM"
            width={0}
            height={0}
            sizes="100vw"
            className="-ml-2 h-full w-auto"
            fetchPriority="high"
          />
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <CardTitle className="mb-1">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <div className="py-4">{children}</div>
      </CardContent>
    </Card>
  )
}
