import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesComponent from "../ParticlesComponent/ParticlesComponent";
import TransitionSectionComponent from "../TransitionSectionsComponent/TransitionSectionComponent";
import { Icon } from "@iconify/react";

export default function PresentationComponent({ title, name, smallText }) {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div
        className="h-screen w-full flex flex-col justify-center items-center"
        data-aos="zoom-in"
      >
        <p className="text-2xl text-gray-300 z-50 max-[426px]:text-base max-[426px]:max-w-[35ch] max-[426px]:text-center">
          {title}{" "}
          <span className="text-3xl font-medium max-[426px]:text-xl">
            {name}.
          </span>
        </p>

        <p
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="max-w-[60ch] text-center max-[426px]:text-sm max-[426px]:max-w-[40ch]"
        >
          {smallText}
        </p>

        <div
          className="z-50 mt-5 flex gap-2"
          data-aos="zoom-in-up"
          data-aos-delay="1300"
        >
          <a
            href="https://github.com/AndreLHPsilva"
            className="cursor-pointer hover:rotate-[720deg] hover:scale-110 duration-700 transition-all"
            target="_blank"
            title="Link para GitHub"
          >
            <Icon
              icon="mdi:github"
              color="#719bde"
              width={48}
              height={48}
              className="max-[426px]:w-9 max-[426px]:h-9"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-henrique-0a6604179/"
            className="cursor-pointer hover:rotate-[720deg] hover:scale-110 duration-700 transition-all"
            target="_blank"
            title="Link para LinkedIn"
          >
            <Icon
              icon="mdi:linkedin"
              color="#719bde"
              width={48}
              height={48}
              className="max-[426px]:w-9 max-[426px]:h-9"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5512982451168"
            className="cursor-pointer hover:rotate-[720deg] hover:scale-110 duration-700 transition-all"
            target="_blank"
            title="Link para WhatsApp"
          >
            <Icon
              icon="dashicons:whatsapp"
              color="#719bde"
              width={48}
              height={48}
              className="max-[426px]:w-9 max-[426px]:h-9"
            />
          </a>
        </div>
        <ParticlesComponent />
        <TransitionSectionComponent />
      </div>
    </>
  );
}
