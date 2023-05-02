import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function MenuComponent() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleLinkMenu = () => {
    setOpenMenu(false);
  };


  return (
    <>
      <header
        className={`w-full fixed flex justify-around items-center py-5 border-b-2 border-gray-50 border-opacity-5 backdrop-blur-sm backdrop-brightness-90 z-50 ${
          openMenu
            ? "max-[769px]:flex-col max-[769px]:h-screen max-[769px]:justify-start max-[769px]:backdrop-brightness-50 max-[769px]:transition-all"
            : ""
        }`}
      >
        <div className="max-[769px]:flex max-[769px]:justify-around max-[769px]:items-center max-[769px]:w-full">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer z-50"
          >
            <picture className="z-50" onClick={handleLinkMenu}>
              <Image
                src={"./imgs/AlhpS.svg"}
                alt="Logotipo com nome do autor"
                width={81}
                height={15}
                className="min-[769px]:hidden hover:scale-110 transition-all z-50"
              />
              <Image
                src={"./imgs/AndréLHPsilva.svg"}
                alt="Logotipo com nome do autor"
                width={209}
                height={16}
                className="hover:scale-110 transition-all max-[769px]:hidden z-50"
              />
            </picture>
          </Link>
          <Icon
            icon="ep:close-bold"
            color="#004bc3"
            width={48}
            height={48}
            className={`min-[769px]:hidden cursor-pointer z-50 hover:scale-110 ${
              openMenu ? "" : "max-[769px]:hidden"
            }`}
            onClick={() => setOpenMenu(false)}
          />
          <Icon
            icon="ci:menu-alt-01"
            color="#004bc3"
            width={48}
            height={48}
            className={`min-[769px]:hidden cursor-pointer z-50 hover:scale-110 ${
              openMenu ? "max-[769px]:hidden" : ""
            }`}
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <nav
          className={`z-50 text-white ${
            openMenu ? "max-[769px]:flex mt-10" : "max-[769px]:hidden"
          }`}
        >
          <ul className={`flex gap-5 max-[769px]:flex-col ${openMenu ? "max-[769px]:text-center" : ""}`}>
            <li className="hover:scale-110 transition-all">
              <Link
                activeClass={"border-b-2 border-gray-50 backdrop-blur-2xl"}
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer"
                onClick={handleLinkMenu}
              >
                Home
              </Link>
            </li>
            <li className="hover:scale-110 transition-all">
              <Link
                activeClass="border-b-2 border-gray-50"
                to="abbout"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer"
                onClick={handleLinkMenu}
              >
                Sobre
              </Link>
            </li>
            <li className="hover:scale-110 transition-all">
              <Link
                activeClass="border-b-2 border-gray-50"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer"
                onClick={handleLinkMenu}
              >
                Experiência
              </Link>
            </li>
            <li className="hover:scale-110 transition-all">
              <Link
                activeClass="border-b-2 border-gray-50"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer"
                onClick={handleLinkMenu}
              >
                Projetos
              </Link>
            </li>
            <li className="hover:scale-110 transition-all">
              <Link
                activeClass="border-b-2 border-gray-50"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer"
                onClick={handleLinkMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
