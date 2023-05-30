"use client"
import '../../styles/global.css'
import Navbar from "@/components/Navbar"
import Providers from "@/components/ThemeProvider";
import ThemeChanger from "@/components/ThemeChanger";
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <Providers>
          <ThemeChanger />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
