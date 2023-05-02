import MenuComponent from "@/components/MenuComponent/MenuComponent";
import PresentationComponent from "../PresentationComponent/PresentationComponent";

export default function HeaderComponent() {
  return (
    <section
      className="relative bg-black h-screen z-50 w-full text-white overflow-hidden"
      id="home"
    >
      <MenuComponent />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <PresentationComponent
          title={"Bem vindo, me chamo"}
          name={"André Luiz"}
          smallText={"Atualmente curso Análise e desenvolvimento de sistemas e sou Estágiário de Desenvolvimento Web Full Stack"}
        />
      </div>
    </section>
  );
}
