import "./globals.css"

import type { Metadata } from "next"
import { Poppins as FontSans } from "next/font/google"

// Components
import { Toaster } from "@/components/ui/toaster"

// Utilities
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

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
      <head>
        <link
          rel="icon"
          href="/assets/favicon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body
        className={cn(
          "flex h-dvh flex-col overflow-hidden bg-zinc-100 font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
