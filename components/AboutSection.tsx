import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-6 md:pt-16 md:pb-32">
        <h1 className="text-center font-bold text-4xl">
          Acerca de mi
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Conoce un poco de mi!
            </h1>
            <p>
              👋 Tengo 21 años y estoy cursando el cuarto semestre de{" "}
              <span className="font-bold">{" Ingeniería Informática"}</span> en
              el Instituto Duoc UC. Mi pasión y especialidad es el desarrollo de
              aplicaciones con JavaScript. 💻
            </p>
            <br />
            <p>
              💡 Con 3 años de experiencia, dominé JavaScript y tecnologías como
              Node.js y React.js. Desarrollé aplicaciones web interactivas y
              escalables.
            </p>

            <br />
            <p>
              🌱 Siempre aprendo y me mantengo actualizado. Me apasiona
              encontrar soluciones creativas y colaborar en proyectos para crear
              experiencias excepcionales. ¡Trabajemos juntos para llevar tu
              proyecto al siguiente nivel! 👨‍💻
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/herophoto.png"
              alt="herophoto"
              width={400}
              height={400}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
