import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Favorite Links",
    description:
      "Favorites Links: 🌟 una aplicación web para guardar y organizar tus enlaces favoritos. Desarrollada con Node.js, Express y MySQL, cuenta con autenticación de usuario mediante Passport.js. Utiliza Handlebars para la interfaz y CSS personalizado. ¡Administra tus enlaces favoritos de manera segura y sencilla con Favorites Links! 🔒💻",
    image: "/favoriteslinks.png",
    github: "https://github.com/mayk0l/NodeJS-MySQL-Auth-Crud",
    link: "https://nodejs-mysql-auth-crud-production.up.railway.app/",
  },
  {
    name: "Aplicacion de Tareas",
    description: "📋 Aplicación de Lista de Tareas con Firebase: una app React para gestionar tu lista de tareas. Con operaciones CRUD, esta app está conectada a Firebase, ofreciendo sincronización en tiempo real y una experiencia fluida. Añade, actualiza y elimina tareas de manera sencilla, ¡mantén tus actividades organizadas y bajo control! 🔥📝",
    image: "/todoapp.png",
    github: "https://github.com/mayk0l/todoapp",
    link: "https://charming-gaufre-0161f9.netlify.app/",
  },
  {
    name: "Blog Auto-Administrable",
    description:
      "📝 El Blog con GraphCMS: una app basada en Next.js y GraphCMS, para crear y gestionar un blog moderno. GraphCMS es un CMS headless que facilita la creación y edición de entradas de blog. Next.js se encarga del enrutamiento y renderizado en el servidor, asegurando un rendimiento óptimo y carga rápida. ¡Comparte tus ideas y experiencias a través de publicaciones de blog interactivas y atractivas! ✍️🚀",
    image: "/blog_graphcms.png",
    github: "https://github.com/mayk0l/GraphCMS_MaykolBlog",
    link: "https://maykol-example-blog.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos 📂
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-20 items-baseline">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-14 md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 w-auto"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-center mt-28 italic">
        No dudes en contactarme a través de cualquiera de mis redes sociales. ⬇️
      </h1>
    </section>
  );
};

export default ProjectsSection;
