import MenuComponent from "@/components/MenuComponent/MenuComponent";
import { listProjects } from "@/utils/listProjects";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Projects() {
  const lengthArray = listProjects.length;
  const [indexInitArray, setIndexInitArray] = useState(0);
  const [indexFinishedArray, setIndexFinishedArray] = useState(3);

  const [disableButtonNextProjects, setDisableButtonNextProjects] =
    useState(false);
  const [disableButtonPrevProjects, setDisableButtonPrevProjects] =
    useState(true);

  function handleNextProjects() {
    if (indexFinishedArray <= lengthArray) {
      if (indexFinishedArray + 3 == lengthArray) {
        setDisableButtonNextProjects(true);
      }

      setIndexFinishedArray((value) => value + 3);
      setIndexInitArray((value) => value + 3);
      setDisableButtonPrevProjects(false);
    }
  }

  function handlePrevProjects() {
    if (indexInitArray > 0) {
      if (indexInitArray - 3 == 0) {
        setDisableButtonPrevProjects(true);
      }

      setIndexFinishedArray((value) => value - 3);
      setIndexInitArray((value) => value - 3);
      setDisableButtonNextProjects(false);
    }
  }

  useEffect(() => {
    if (lengthArray <= 3) {
      setDisableButtonNextProjects(true);
    }
  }, []);

  return (
    <>
      <MenuComponent activeIndex={99} withoutSwipper={true} />
      <main className="flex flex-col justify-between pt-24 text-white lg:px-20 px-10 min-h-screen sm:gap-0 gap-10">
        <section className="flex flex-col lg:gap-5 gap-3">
          <div className="flex flex-col gap-5">
            <div>
              <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">
                Meus
              </span>
              <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">
                Projetos
              </h1>
            </div>
          </div>
          <section className="mt-5 w-full flex-1 flex">
            <div className="flex flex-col justify-between gap-5 flex-1">
              <div className="">
                <div className="flex gap-5 w-full justify-center mb-5">
                  <button
                    disabled={disableButtonPrevProjects}
                    onClick={handlePrevProjects}
                    className="disabled:opacity-50"
                  >
                    Anteriores
                  </button>
                  <button
                    disabled={disableButtonNextProjects}
                    onClick={handleNextProjects}
                    className="disabled:opacity-50"
                  >
                    Próximos
                  </button>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
                  {listProjects.length > 0 &&
                    listProjects
                      .slice(indexInitArray, indexFinishedArray)
                      .map((project, index) => {
                        return (
                          <>
                            <div
                              className="rounded-lg text-center lg:h-96 h-28 overflow-hidden max-[976px]:hover:h-80 transition-all shadow-md shadow-teal-300 flex flex-col"
                              key={index}
                            >
                              <div className="sm:p-6 p-3 flex-1">
                                <h5 className="mb-2 text-xl font-medium leading-tight border-b border-teal-300 pb-3">
                                  {project.title}
                                </h5>
                                <p className="text-sm max-[375px]:hover:h-40 sm:max-h-60 max-h-40 overflow-y-scroll">
                                  {project.description}
                                </p>
                              </div>
                              <div className="px-6 py-3">
                                <div className="flex gap-2 border-t border-teal-300 pt-3 px-3">
                                  {project.tecnologies.map((tecnology) => {
                                    return <span>{tecnology.name}</span>;
                                  })}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
              </div>
            </div>
          </section>
        </section>
        <footer className="flex max-[426px]:flex-col gap-5 sm:justify-around items-center py-5 border-t border-teal-300">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 w-full justify-center">
              <a
                href="https://github.com/AndreLHPsilva"
                className="cursor-pointer hover:scale-110 duration-300 transition-all"
                target="_blank"
                title="Link para GitHub"
              >
                <Icon
                  icon="codicon:github"
                  color="#5eead4"
                  width="34"
                  className="md:w-[2.125rem] w-7"
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
                  className="md:w-[2.125rem] w-7"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5512982451168"
                className="cursor-pointer hover:scale-110 duration-300 transition-all"
                target="_blank"
                title="Link para WhatsApp"
              >
                <Icon
                  icon="icomoon-free:whatsapp"
                  color="#5eead4"
                  width="34"
                  className="md:w-[2.125rem] w-7"
                />
              </a>
            </div>
          </div>
          <div className="text-white flex flex-col items-center justify-center">
            <span>André Luiz</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div>
            <a
              href="dev-jr-backend.pdf"
              target="_blank"
              className="self-start py-2 px-3 bg-transparent border-b-2 border-teal-300 rounded-md text-teal-300 transition-all hover:opacity-80 mt-2 hover:scale-105 sm:text-base text-xs"
            >
              Baixar Currículo
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
