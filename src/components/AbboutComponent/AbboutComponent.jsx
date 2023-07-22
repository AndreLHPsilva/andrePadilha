export default function AbboutComponent() {
  return (
    <section
      className="text-white flex flex-col h-screen justify-center lg:px-20 md:px-10 px-10"
      id="abbout"
    >
      <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">Perfil</span>
      <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">Profissional</h1>
      <div className="relative">
        <div className="flex items-center justify-start w-full gap-5 text-base text-gray-300 tracking-wide max-[769px]:flex-col relative">
          <div className="">
            <p className="mt-10 font-medium text-start rounded-lg lg:text-lg lg:max-w-[80ch] md:text-base md:max-w-[80ch] text-sm">
              Com experiência no desenvolvimento Backend utilizando de boas práticas para códigos escaláveis e de alta performance.

              Profissional que onde atuou nunca teve problemas com hierarquias e de comportamento. Sempre se destacando
              pela educação, dedicação e bom trabalho. Realmente veste a camisa e tem espirito de dono. Continue para saber mais sobre seus conhecimentos...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
