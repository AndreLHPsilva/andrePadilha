import ContactComponent from "@/components/ContactComponent/ContactComponent";
import AbboutComponent from "@/components/AbboutComponent/AbboutComponent";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";


export default function Home() {
  return (
    <>
      <HeaderComponent />
      <AbboutComponent />
      <ExperienceComponent />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
}
