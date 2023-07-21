export default function AbboutComponent() {
  return (
    <section
      className=" text-white py-20 flex flex-col h-full mx-20 justify-center"
      id="abbout"
    >
      <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">Perfil</span>
      <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">Profissional</h1>
      <div className="relative">
        <div className="flex items-center justify-start w-full gap-5 text-base text-gray-300 tracking-wide max-[769px]:flex-col relative">
          <div className="">
            <p className="mt-10 font-medium text-start rounded-lg lg:text-lg lg:max-w-[80ch] md:text-base md:max-w-[80ch] text-sm">
              Sou um profissional que por algum tempo atuei na área produtiva de
              industrias metalurgicas e papeleira. Em todos os casos, nunca tive
              problemas com hierarquias e de comportamento. Sempre me destacando
              pela educação, dedicação e bom trabalho. Realmente visto a camisa
              e tenho espirito de dono. Continue para saber sobre minhas
              experiências...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
