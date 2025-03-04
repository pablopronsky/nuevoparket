import React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import '../styles/fonts.css'

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nuevo Parket",
  description:
    "Desde 1996 creando bienestar",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={roboto.className}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}