import MenuComponent from "@/components/MenuComponent/MenuComponent";
import PresentationComponent from "../PresentationComponent/PresentationComponent";

export default function HeaderComponent() {
  return (
    <section
      className="relative h-screen z-50 w-full text-white overflow-hidden"
      id="home"
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <PresentationComponent
          title={"Seja muito bem-vindo(a)!"}
          beforeName={"Meu nome é"}
          name={"André Luiz"}
          smallText={"Fico à disposição para eventuais dúvidas ou para mais informações. Obrigado pela visita!"}
        />
      </div>
    </section>
  );
}
