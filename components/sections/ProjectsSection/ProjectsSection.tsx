import { CardProject } from "@/components/ui/cardProject/CardProject";
import "./ProjectsSection.scss";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        <div className="header">
          <div className="sticky">
            <h2>Trabalhos que já fiz</h2>
            <p>
              Projetos selecionados que demonstram minha evolução como
              desenvolvedor, com foco em aplicações reais, arquitetura
              frontend/backend e construção de interfaces escaláveis. Muitos são
              open source — explore o código para ver decisões técnicas e
              implementação.
            </p>
          </div>
        </div>
        <div className="projects">
          <CardProject
            date="2025"
            title="Portal do Cidadão - Estância Velha"
            description="Facilitando o acesso aos serviços da Prefeitura"
            imageSrc="/portal-cidadao-estancia-velha.webp"
            imageAlt="Portal do Cidadão - Estância Velha Image"
            projectUrl="/portal-cidadao-estancia-velha"
          />
          <CardProject
            date="2025"
            title="MeuDim"
            description="Organizando as finanças de forma eficiente"
            imageSrc="/meudim.webp"
            imageAlt="MeuDim Image"
            projectUrl="/meudim"
          />
          <CardProject
            date="2024"
            title="Design System Zeroz"
            description="Construindo um 
Design System escalável"
            imageSrc="/design-system-zeroz.webp"
            imageAlt="Design System Zeroz Image"
            projectUrl="/design-system-zeroz"
          />
        </div>
      </div>
    </section>
  );
}
