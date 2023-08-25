import { listTechnologies } from "@/utils/listTechnologies";
import { Icon } from "@iconify/react";

export default function ExperienceComponent() {
  return (
    <section
      className=" text-white grid lg:grid-cols-2 grid-cols-1 grid-rows-1 h-screen justify-center xl:px-32 lgg:px-10 md:px-20 px-10 gap-5"
      id="experience"
    >
      <div className="flex flex-col justify-center">
        <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">
          Meus
        </span>
        <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">
          Conhecimentos
        </h1>
        <div className="flex justify-start w-full gap-5 text-base text-gray-300 tracking-wide max-[769px]:flex-col relative">
          <ul className="uppercase mt-5 lg:text-xl md:text-lg text-sm">
            {listTechnologies.length > 0 &&
              listTechnologies.map((tecnology, index) => {
                return <div key={index}>{tecnology}</div>;
              })}
          </ul>
        </div>
      </div>
      <div className="lg:flex hidden w-full opacity-60">
        <img
          src="/imgs/logos.png"
          alt="Todos os logos das tecnologias que o autor domina"
          className="object-contain  xl:max-w-xl lgg:max-w-sm md:max-w-[280px] transition-all duration-500 hover:scale-110"
        />
      </div>
    </section>
  );
}
