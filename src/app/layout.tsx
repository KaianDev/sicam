import "./globals.css"

import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

// Components
import { Header } from "@/components/header"

// Utilities
import { cn } from "@/lib/utils"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "SiCAM",
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
        className={cn("min-h-screem font-sans antialiased", fontSans.variable)}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
