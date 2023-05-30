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
              💡 Llevo 3 años programando y durante ese tiempo me he enfocado en
              dominar el lenguaje JavaScript y sus diversas tecnologías
              asociadas, como Node.js y React.js. A través de proyectos
              personales y académicos, he adquirido experiencia práctica en el
              desarrollo de aplicaciones web interactivas y escalables. ✨
            </p>
            <br />
            <p>
              💪 Mi enfoque se centra en escribir código limpio y eficiente,
              utilizando las mejores prácticas de programación. Me encanta
              resolver problemas y encontrar soluciones creativas utilizando la
              potencia de JavaScript. 🔧
            </p>
            <br />
            <p>
              🌱 Siempre estoy aprendiendo y manteniéndome al día con las
              tendencias emergentes en el campo del desarrollo web. Me emociona
              explorar nuevas posibilidades y poner en práctica mis habilidades
              para crear experiencias web excepcionales. 🚀
            </p>
            <br />
            <p>
              🤝 Si estás buscando un desarrollador JavaScript comprometido y
              apasionado, ¡estoy aquí para colaborar contigo y llevar tu
              proyecto al siguiente nivel! Trabajemos juntos para convertir tus
              ideas en realidad. 👨‍💻
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
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
