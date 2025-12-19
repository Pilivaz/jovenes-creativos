import type React from "react"
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css"
import ClientLayout from "./ClientLayout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <title>Jóvenes Creativos - Innovación para la Comunidad</title>
        <meta
          name="description"
          content="Grupo de jóvenes y profesores creando soluciones tecnológicas para nuestra comunidad"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
