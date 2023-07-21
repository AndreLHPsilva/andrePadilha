import { listTechnologies } from "@/utils/listTechnologies";

export default function ExperienceComponent() {
  return (
    <section
      className=" text-white flex flex-col h-screen justify-center lg:px-20 md:px-10 px-10"
      id="experience"
    >
      <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">
        Meus
      </span>
      <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">
        Conhecimentos
      </h1>
      <div className="flex justify-start w-full gap-5 text-base text-gray-300 tracking-wide max-[769px]:flex-col relative">
        <ul className="uppercase mt-5 lg:text-xl md:text-lg text-sm">
          {listTechnologies.length > 0 &&
            listTechnologies.map((tecnology) => tecnology)}
        </ul>
      </div>
    </section>
  );
}
