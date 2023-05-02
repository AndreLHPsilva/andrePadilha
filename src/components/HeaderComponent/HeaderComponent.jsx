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
          title={"Seja muito bem-vindo(a)! Meu nome é"}
          name={"André Luiz"}
          smallText={"Apresento-lhe meu portfólio, no qual é possível verificar minhas habilidades e competências. Fico à disposição para eventuais dúvidas ou para mais informações. Obrigado pela visita!"}
        />
      </div>
    </section>
  );
}
