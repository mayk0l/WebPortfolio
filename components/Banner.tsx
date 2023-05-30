function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Código Innovador</h1>
        <h2 className="mt-5 md:mt=0">
          Bienvenidos a{" "}
          <span className="underline decoration-4 decoration-[#319795]">
            mi blog personal
          </span>
          {".  "}
          Descubriendo el Potencial de la Tecnología y Programación
        </h2>
      </div>

      <p className="mt-24 md:mt-2 text-gray-400 max-w-sm">
        Blog de Tecnología, Últimas Tendencias, Noticias Tecnológicas,
        Desarrollo Web, Programación, Diseño UX/UI
      </p>
    </div>
  );
}

export default Banner;
