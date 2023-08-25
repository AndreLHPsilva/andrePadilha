import { Icon } from "@iconify/react";

export default function PresentationComponent({
  title,
  name,
  beforeName,
  smallText,
}) {
  return (
    <>
      <div className="h-screen w-full grid md:grid-cols-2 grid-cols-1 grid-rows-1 justify-center items-center max-[426px]:px-10 container m-auto">
        <div className="flex flex-col justify-center gap-4 relative xl:px-14 lgg:px-10 md:px-5 px-10">
          <span className="tracking-tighter text-gray-500 xl:text-5xl lgg:text-3xl md:text-2xl sm:text-lg text-2xl">
            Desenvolvedor Backend
          </span>
          <p className="text-gray-300 xl:text-2xl lgg:text-xl md:text-lg sm:text-base text-sm">
            {title} <br />
            <span className="inline-block">{beforeName}</span>{" "}
            <span className="text-3xl font-medium md:text-2xl max-[426px]:text-xl">
              {name}.
            </span>
          </p>

          <div className="z-50 mt-5 flex flex-col gap-3 opacity-100">
            <p className="text-gray-300 lg:w-full md:max-w-[40ch] xl:text-base md:text-sm sm:flex hidden">
              {smallText}
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/AndreLHPsilva"
                className="cursor-pointer hover:scale-110 duration-300 transition-all"
                target="_blank"
                title="Link para GitHub"
              >
                <Icon
                  icon="mdi:github"
                  color="#5eead4"
                  width={48}
                  height={48}
                  className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9-henrique-0a6604179/"
                className="cursor-pointer hover:scale-110 duration-300 transition-all"
                target="_blank"
                title="Link para LinkedIn"
              >
                <Icon
                  icon="mdi:linkedin"
                  color="#5eead4"
                  width={48}
                  height={48}
                  className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5512982451168"
                className="cursor-pointer hover:scale-110 duration-300 transition-all"
                target="_blank"
                title="Link para WhatsApp"
              >
                <Icon
                  icon="dashicons:whatsapp"
                  color="#5eead4"
                  width={48}
                  height={48}
                  className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9"
                />
              </a>
            </div>
            <a
              href="dev-jr-backend.pdf"
              target="_blank"
              className="self-start py-2 px-3 bg-transparent border-b-2 border-teal-300 rounded-md text-blue-50 transition-all hover:opacity-80 mt-2 hover:scale-105 sm:text-base text-xs"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full ">
          <img
            src="/imgs/code.svg"
            alt="Imagem de uma tela de computador com códigos de programação"
            className="object-contain md:block hidden transition-all duration-500 xl:max-w-xl lgg:max-w-sm md:max-w-[280px] rotate-12 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}
