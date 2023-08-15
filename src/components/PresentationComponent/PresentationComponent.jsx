import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function PresentationComponent({
  title,
  name,
  beforeName,
  smallText,
}) {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center gap-4 relative lg:px-20 px-10">
        <span className="tracking-tighter text-gray-500 lg:text-5xl md:text-3xl sm:text-2xl text-xl">
          Backend
        </span>
        <p className="text-gray-300 lg:text-4xl md:text-2xl sm:text-lg text-base">
          {title} <br />
          <span className="inline-block">{beforeName}</span>{" "}
          <span className="text-3xl font-medium max-[426px]:text-xl">
            {name}.
          </span>
        </p>

        <div className="z-50 mt-5 flex flex-col gap-3 opacity-100">
          <p className="text-gray-300 lg:w-full md:max-w-[40ch] lg:text-xl md:text-lg sm:text-base sm:flex hidden">
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
                color="#719bde"
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
                color="#719bde"
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
                color="#719bde"
                width={48}
                height={48}
                className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9"
              />
            </a>
          </div>
          <a
            href="dev-jr-backend.pdf" target="_blank"
            className="self-start py-2 px-3 bg-transparent border-b-2 rounded-md text-blue-50 transition-all hover:opacity-80 mt-2 hover:scale-105 sm:text-base text-xs"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </>
  );
}
