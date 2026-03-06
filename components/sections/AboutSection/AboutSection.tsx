import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { DiMsqlServer, DiSass, DiNetmagazine } from "react-icons/di";
import { GrOracle } from "react-icons/gr";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./AboutSection.scss";
import Image from "next/image";

const photos = [
  "/image-1.jpg",
  "/image-2.jpeg",
  "/image-3.jpeg",
  "/image-4.jpeg",
];

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

  const skills = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: BiLogoJavascript, color: "#F7DF1E" },
    { Icon: BiLogoTypescript, color: "#3178C6" },
    { Icon: DiSass, color: "#CC6699" },
    { Icon: DiNetmagazine, color: "#512BD4" },
    { Icon: DiMsqlServer, color: "#CC2927" },
    { Icon: GrOracle, color: "#F80000" },
  ];

  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-section__container" ref={containerRef}>
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
            {skills.map(({ Icon, color }, index) => (
              <div key={index}>
                <Icon size={32} color={color} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="about-section__carousel"
        style={{ height: `${height}px` }}
      >
        <div className="about-section__carousel-window">
          <motion.div
            className="about-section__carousel-track"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {photos.map((photo, i) => (
              <div key={i} className="about-section__carousel-slide">
                <Image
                  width={500}
                  height={500}
                  src={photo}
                  alt={`slide-${i}`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="about-section__carousel-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
