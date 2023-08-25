import { Icon } from "@iconify/react";
import { useState } from "react";
import FormEmailComponent from "../FormEmailComponent/FormEmailComponent";

export default function ContactComponent() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section
        className="w-full h-screen flex flex-col justify-center max-[426px]:px-5 px-14 text-white lg:gap-14 sm:gap-10 gap-5 container mx-auto pt-16"
        id="contact"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-full">
          <div className="flex-1 flex flex-col xl:gap-20 gap-10">
            <div>
              <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-xs">
                entre em
              </span>
              <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">
                Contato
              </h1>
            </div>
            <FormEmailComponent />
          </div>
          <div className="lg:flex hidden flex-col justify-center w-full items-center gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg ">Outras opções:</h2>
              <div className="flex gap-5 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=5512982451168"
                  target="_blank"
                  className="cursor-pointer hover:scale-110 duration-300 transition-all"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="icomoon-free:whatsapp"
                    color="#5eead4"
                    width="34"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/andr%C3%A9-henrique-0a6604179/"
                  className="cursor-pointer hover:scale-110 duration-300 transition-all"
                  target="_blank"
                  title="Link para LinkedIn"
                >
                  <Icon
                    icon="teenyicons:linkedin-outline"
                    color="#5eead4"
                    width="34"
                  />
                </a>
              </div>
            </div>
            <div className="lg:flex hidden justify-center w-full opacity-70">
              <img
                src="https://media.giphy.com/media/dxCKe2dx5qD7I5gMgj/giphy.gif"
                alt="Imagem ilustrativa de um computador"
                className="object-contain max-w-[280px] transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
