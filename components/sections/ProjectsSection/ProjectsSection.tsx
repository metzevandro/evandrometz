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
        <div className="projects"></div>
      </div>
    </section>
  );
}
