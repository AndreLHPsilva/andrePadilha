import { Icon } from "@iconify/react";
import Image from "next/image";

export default function ProjectsComponent() {
  return (
    <div
      className="h-screen text-white flex flex-col justify-center"
      id="projects"
    >
      <section className="flex flex-wrap w-full justify-center">
        <div className="group relative overflow-hidden shadow-2xl shadow-[#00c8ff50] rounded-2xl transition-all duration-500 hover:shadow-[#00e1ff7c]">
          <img
            src={"/imgs/teste.png"}
            alt="Imagem do projeto"
            className="w-[320px] h-[320px] rounded-2xl"
          />
          <div
            className={`absolute rounded-2xl -bottom-full left-0 backdrop-brightness-50 w-full h-full text-center flex flex-col justify-center items-center pb-5 group-hover:bottom-0 transition-all duration-500 backdrop-blur-sm`}
          >
            <h1>Titulo</h1>
            <p>Breve descrição</p>
            <a href="https://github.com/" target="_blank">
              <Icon
                icon="mdi:github"
                color="#002d75"
                width={48}
                height={48}
                className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
