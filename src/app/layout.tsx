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
        className={cn(
          "flex min-h-screen flex-col  font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        <div className="flex-1 flex-col bg-zinc-200 px-4 sm:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
