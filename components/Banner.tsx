function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Mi Blog personal</h1>
        <h2 className="mt-5 md:mt=0">
          Bienvenidos a{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            mi blog 
          </span>{".  "}
          Contenido digital y mas.
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Contenido general / Lo ultimo en tecnologia / Cursos y mucho más.
      </p>
    </div>
  );
}

export default Banner;
