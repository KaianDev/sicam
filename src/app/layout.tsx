import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "SICAM",
  description: "Sistema de Cadastro de Arquivo Morto",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn("min-h-screem font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
