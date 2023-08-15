import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MenuComponent({
  activeIndex,
  goToIndex = null,
  withoutSwipper = false,
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  function handleLinkMenu() {
    setOpenMenu(false);
  }

  function handleChangeMenu(index) {
    if (!withoutSwipper) {
      if(!!goToIndex){
        goToIndex(index);
        handleLinkMenu();
      }
    } else {
      if (index === 99) {
        router.reload();
      } else {
        router.push({ pathname: "/", query: { activeIndex: index } });
      }
    }
  }

  return (
    <>
      <header
        className={`w-full fixed flex justify-around items-center sm:py-5 py-2 border-b-2 border-gray-50 border-opacity-5 backdrop-blur-sm backdrop-brightness-90 z-40 ${
          openMenu
            ? "max-[769px]:flex-col max-[769px]:h-screen max-[769px]:justify-start max-[769px]:backdrop-brightness-50 max-[769px]:transition-all"
            : ""
        }`}
      >
        <div className="max-[769px]:flex max-[769px]:justify-around max-[769px]:items-center max-[769px]:w-full">
          <div
            onClick={() => {
              handleChangeMenu(0);
            }}
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
          </div>
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
          <ul
            className={`flex gap-5 max-[769px]:flex-col ${
              openMenu ? "max-[769px]:text-center" : ""
            }`}
          >
            <li
              className="hover:scale-110 transition-all flex flex-col"
              onClick={() => {
                handleChangeMenu(0);
              }}
            >
              <h2 className="cursor-pointer">Home</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 0
                    ? "bg-[#719bde] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:scale-110 transition-all flex flex-col"
              onClick={() => {
                handleChangeMenu(1);
              }}
            >
              <h2 className="cursor-pointer">Sobre</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 1
                    ? "bg-[#719bde] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:scale-110 transition-all flex flex-col"
              onClick={() => {
                handleChangeMenu(2);
              }}
            >
              <h2 className="cursor-pointer">Tecnologias</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 2
                    ? "bg-[#719bde] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:scale-110 transition-all flex flex-col"
              onClick={() => {
                handleChangeMenu(99);
              }}
            >
              <h2 className="cursor-pointer">Projetos</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 99
                    ? "bg-[#719bde] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:scale-110 transition-all flex flex-col"
              onClick={() => {
                handleChangeMenu(3);
              }}
            >
              <h2 className="cursor-pointer">Contato</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 3
                    ? "bg-[#719bde] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
