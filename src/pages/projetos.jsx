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
          <section className="my-10 w-full flex items-center justify-center">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3500}
              transitionTime={1000}
              stopOnHover={true}
              className="lg:w-[80%] relative"
            >
              {listProjects.length > 0 &&
                listProjects.map((project) => {
                  return (
                    <>
                      <div className="max-h-[550px]">
                        <img
                          src={project.path_main_img}
                          alt="Imagem do projeto"
                          className="object-cover w-full"
                        />
                        <div className="legend absolute top-2/4 transition-all duration-1000 flex flex-col sm:gap-5 gap-2">
                          <div className="flex flex-col">
                            <span className="sm:text-xl text-xs">{project.title}</span>
                            <span className="text-[10px]">{project.description}</span>
                          </div>
                          <div className="flex gap-2 justify-center">
                            {project.tecnologies.length > 0 &&
                              project.tecnologies.map((tecnology) => {
                                return <span>{tecnology.name}</span>;
                              })}
                          </div>
                        </div>
                      </div>
                      <span className="absolute top-10 right-10 text-black transition-all duration-500 max-[426px]:top-56 max-[426px]:right-5 cursor-pointer hover:scale-110 ">
                        <Icon
                          icon="bi:github"
                          color="#000d36"
                          width="40"
                          height="40"
                          className="sm:w-10 sm:h-10 w-7 h-7"
                        />
                      </span>
                    </>
                  );
                })}
              {/* <div>
                <img src="/imgs/ignite.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="/imgs/ignite.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="/imgs/ignite.jpg" />
                <p className="legend">Legend 3</p>
              </div> */}
            </Carousel>
          </section>
        </section>
      </main>
    </>
  );
}
