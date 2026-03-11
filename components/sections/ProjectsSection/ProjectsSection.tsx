import { CardProject } from "@/components/ui/cardProject/cardProject";
import "./ProjectsSection.scss";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        <div className="header">
          <div className="sticky">
            <h1>Trabalhos que já fiz</h1>
            <p>
              Eu trabalhei em muitos pequenos projetos paralelos ao longo dos
              anos, aqui estão alguns recentes. Muitos deles são de código
              aberto, então se você ver algo que desperte seu interesse, confira
              o código.
            </p>
          </div>
        </div>
        <div className="projects">
          <CardProject
            date="2025"
            title="Portal do Cidadão - Estância Velha"
            description="Facilitando o acesso aos serviços da Prefeitura"
            imageSrc="/portal-cidadao.webp"
            imageAlt="Portal do Cidadão Image"
            projectUrl=""
          />
          <CardProject
            date="2025"
            title="MeuDim"
            description="Organizando as finanças de forma eficiente"
            imageSrc="/MeuDim.webp"
            imageAlt="MeuDim Image"
            projectUrl=""
          />
          <CardProject
            date="2024"
            title="Design System Zeroz"
            description="Construindo um 
Design System escalável"
            imageSrc="/Zeroz.webp"
            imageAlt="Zeroz Image"
            projectUrl="/design-system-zeroz"
          />
        </div>
      </div>
    </section>
  );
}
