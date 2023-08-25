export default function AbboutComponent() {
  return (
    <section
      className="text-white flex flex-col h-screen justify-center xl:px-32 lgg:px-10 md:px-20 px-10"
      id="abbout"
    >
      <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">
        Perfil
      </span>
      <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">
        Profissional
      </h1>
      <div className="relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 items-center justify-start w-full gap-5 text-base text-gray-300 tracking-wide relative">
          <div className="">
            <p className="mt-10 font-medium text-start rounded-lg lg:text-lg xl:max-w-[70ch] md:text-base md:max-w-[80ch] text-sm">
              Com experiência no desenvolvimento Backend utilizando de boas
              práticas para códigos escaláveis e de alta performance.
              Profissional que onde atuou nunca teve problemas com hierarquias e
              de comportamento. Sempre se destacando pela educação, dedicação e
              bom trabalho. Realmente veste a camisa e tem espirito de dono.
              Continue para saber mais sobre seus conhecimentos...
            </p>
          </div>
          <div className="lg:flex hidden justify-center w-full opacity-60">
            <img
              src="/imgs/perfil.svg"
              alt=""
              className="object-contain max-w-md transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
