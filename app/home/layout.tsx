
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
