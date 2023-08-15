import MenuComponent from "@/components/MenuComponent/MenuComponent";
import { listProjects } from "@/utils/listProjects";
import { Icon } from "@iconify/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projetos() {
  return (
    <>
      <MenuComponent activeIndex={99} withoutSwipper={true} />
      <main className="pt-28 text-white lg:px-20 px-10">
        <section className="flex flex-col lg:gap-10 gap-5">
          <div className="flex flex-col gap-5">
            <div>
              <span className="uppercase tracking-widest lg:text-2xl md:text-xl sm:text-lg text-sm">
                Meus
              </span>
              <h1 className="font-semibold tracking-wider lg:text-6xl md:text-3xl sm:text-xl text-lg">
                Projetos
              </h1>
            </div>

            <span className="lg:text-xl md:text-lg sm:text-base text-sm">
              Aqui estão alguns de meus projetos, você pode saber mais sobre
              cada um clicando no icone do GitHub.
            </span>
          </div>
          <section className="my-10 w-full">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 max-h-10">
              {listProjects.length > 0 &&
                listProjects.map((project) => {
                  return (
                    <>
                      <div className="rounded-lg bg-neutral-200 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col">
                        <div className="border-b-2 border-neutral-100 px-6 py-3 text-black">
                          {project.title}
                        </div>
                        <div className="p-6 flex-1">
                          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                            {project.title}
                          </h5>
                          <p className="mb-4 text-sm text-neutral-600 ">
                            {project.description}
                          </p>
                        </div>
                        <div className="border-t-2 border-neutral-100 px-6 py-3 text-black">
                          <div className="flex gap-2">
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
          </section>
        </section>
      </main>
    </>
  );
}
