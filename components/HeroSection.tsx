"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
        <Image
            src="/avatarphoto.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl pl-4 font-bold mt-6 md:mt-0 md:text-7xl text-center">   ¡Hola! soy</h1>
          <h1 className="text-4xl font-bold md:text-7xl">➡ Maykol</h1>
          <p className="text-lg mt-8 mb-6 md:text-2xl">
            Un{" "}
            <span className="font-semibold text-teal-600">
              Ingeniero en Software{" "}
            </span>
            chileno. Mi pasión es crear soluciones eficientes y personalizadas para ti. Trabajemos juntos para impulsar tu proyecto al éxito.
          </p>
          <div className="">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Proyectos
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection