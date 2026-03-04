import { FaNode, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { DiMsqlServer, DiSass } from "react-icons/di";
import { DiNetmagazine } from "react-icons/di";
import { GrOracle } from "react-icons/gr";

import "./AboutSection.scss";

type Experience = {
  periodo: string;
  empresa: string;
  cargo: string;
};

function ExperienceCard({ periodo, empresa, cargo }: Experience) {
  return (
    <div className="about-section__experience-card">
      <p>{periodo}</p>
      <div>
        <h6>{empresa}</h6>
        <p>{cargo}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const experiences: Experience[] = [
    {
      periodo: "05/2025 - Presente",
      empresa: "CIGAM Software de Gestão",
      cargo: "Desenvolvedor de Software",
    },
    {
      periodo: "01/2025 - 04/2025",
      empresa: "CIGAM Software de Gestão",
      cargo: "Estagiário de Desenvolvimento de Software",
    },
    {
      periodo: "06/2024 - 12/2024",
      empresa: "Grupo Herval",
      cargo: "Estagiário de TI",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-section__container">
        <div className="about-section__title">
          <h1>Falando sobre mim</h1>
          <p>
            Sou desenvolvedor e tenho paixão por transformar interfaces
            abstratas em projetos concretos e sólidos para o usuário, unindo
            design cuidadoso com engenharia robusta. Meu trabalho favorito está
            na interseção entre design e desenvolvimento, criando experiências
            que não apenas são visualmente atraentes, mas também meticulosamente
            construídas com foco em desempenho e usabilidade.
          </p>
        </div>

        <div className="about-section__experience">
          <h4>Experiência Profissional</h4>
          <div className="about-section__list-experience">
            {experiences.map((exp) => (
              <ExperienceCard key={`${exp.empresa}-${exp.periodo}`} {...exp} />
            ))}
          </div>
        </div>

        <div className="about-section__skills">
          <h4>Especialidades</h4>
          <div className="about-section__list-skills">
            <FaReact size={40} color="#61DAFB" />
            <BiLogoJavascript size={40} color="#F7DF1E" />
            <BiLogoTypescript size={40} color="#3178C6" />
            <DiSass size={40} color="#CC6699" />
            <DiNetmagazine size={40} color="#512BD4" />
            <DiMsqlServer size={40} color="#CC2927" />
            <GrOracle size={40} color="#F80000" />
          </div>
        </div>
      </div>
    </section>
  );
}
