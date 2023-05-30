import Header from "@/components/Header";
import "../../styles/global.css";
import Banner from "@/components/Banner";
import Providers from "@/components/ThemeProvider";
import ThemeChanger from "@/components/ThemeChanger";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="es">
      <body className="max-w-7xl mx-auto">
        <Providers>
          <div className="overflow-x-hidden">
            <Header />
            <ThemeChanger />
            <Banner />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
