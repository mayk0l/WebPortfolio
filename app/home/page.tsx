import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Head from "next/head"

export const metadata = {
  title: "Maykol's Portfolio",
  description: "Explora mi portafolio de desarrollo web para descubrir proyectos creativos y soluciones tecnológicas. Soy un desarrollador web con experiencia en diseño responsive, tecnologías front-end y back-end.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mb-20">
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
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}