import { Icon } from "@/components/ui/icon/Icon";
import { CourseCard } from "@/components/ui/courseCard/CourseCard";
import "./CurriculumSection.scss";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="curriculum-section">
      <div className="curriculum-section__left">
        <div className="sticky">
          <h2>Sempre aprendendo</h2>
          <p>
            Uma das coisas que mais amo na programação é que sempre há algo novo
            para aprender. Aqui está uma seleção de algumas das coisas que tenho
            aprendido ultimamente.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1xqEExYYXpLdIcn9S0i6PeglbPahSFz8i/view?usp=drive_link"
          target="_blank"
        >
          <Icon name="file_save" />
          Baixar Currículo
        </a>
      </div>
      <div className="curriculum-section__right">
        <CourseCard
          date="27 de Agosto, 2025"
          title="ASP.NET Core MVC - Criando um Site do Zero (NET 6)"
          description="Curso pela Udemy focado em criação de aplicações web completas com ASP.NET Core MVC e C#, incluindo estruturação de projeto, páginas, carrinho de compras e área administrativa."
        />

        <CourseCard
          date="05 de Maio, 2025"
          title="Programa de Formação | CIGAM DEVs"
          description="Programa de formação para desenvolvedores na CIGAM, com foco em desenvolvimento de software corporativo utilizando MAGIC xpa, SQL e práticas de desenvolvimento em ambiente ERP."
        />

        <CourseCard
          date="09 de Junho, 2024"
          title="Trilha Digital | Coders 24 | Front End"
          description="Trilha da Ada voltada ao desenvolvimento Front-end, abordando fundamentos da web com HTML, CSS e JavaScript, além de práticas modernas de desenvolvimento."
        />

        <CourseCard
          date="19 de Março, 2024"
          title="JavaScript: explorando a linguagem"
          description="Curso da Alura sobre fundamentos da linguagem JavaScript, abordando lógica, manipulação de dados e conceitos essenciais para desenvolvimento web."
        />
      </div>
    </section>
  );
}
