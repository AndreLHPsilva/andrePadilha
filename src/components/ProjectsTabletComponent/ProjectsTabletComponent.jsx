import { listProjects } from "@/utils/listProjects";
import { Icon } from "@iconify/react";

export default function ProjectsTabletComponent() {
  return (
    <div className="grid grid-cols-2 justify-center items-center h-full lg:gap-10 lg:px-14">
      {listProjects.length > 0 &&
        listProjects.map((project) => {
          return (
            <div className="group w-full relative overflow-hidden shadow-2xl shadow-[#00c8ff50] rounded-2xl transition-all duration-500 hover:shadow-[#00e1ff7c]">
              <img
                src={project.path_main_img}
                alt="Imagem do projeto"
                className="w-full h-full rounded-2xl"
              />
              <div
                className={`absolute rounded-2xl -bottom-full left-0 backdrop-brightness-50 w-full h-full text-center flex flex-col justify-center items-center pb-5 group-hover:bottom-0 transition-all duration-500 backdrop-blur-sm`}
              >
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tecnologies?.map((tecnology) => {
                    return <span>{tecnology.name}</span>;
                  })}
                </div>
                <a href={project.link_to_github} target="_blank">
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
          );
        })}
    </div>
  );
}
