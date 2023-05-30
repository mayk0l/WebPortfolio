"use client"
import '../../styles/global.css'
import Navbar from "@/components/Navbar"
import Providers from "@/components/ThemeProvider";
import ThemeChanger from "@/components/ThemeChanger";
import Footer from '@/components/Footer'
import Head from 'next/head';

export const metadata = {
  title: "Portafolio",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
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
