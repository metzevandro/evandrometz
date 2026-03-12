import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { DiMsqlServer, DiSass, DiNetmagazine } from "react-icons/di";
import { GrOracle } from "react-icons/gr";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./AboutSection.scss";
import Image from "next/image";

const photos = [
  "/image-1.webp",
  "/image-2.webp",
  "/image-3.webp",
  "/image-4.webp",
  "/image-5.webp",
];

type Experience = {
  date: string;
  enterprise: string;
  role: string;
};

type Role = {
  role: string;
  date: string;
};

type ExperienceCardProps = {
  enterprise: string;
  roles: Role[];
};

function ExperienceCard({ enterprise, roles }: ExperienceCardProps) {
  return (
    <div className="about-section__experience-card">
      <h1>{enterprise}</h1>

      {roles.map((r, i) => (
        <div key={i}>
          <p>{r.role}</p>
          <p>{r.date}</p>
        </div>
      ))}
    </div>
  );
}

export function AboutSection() {
  const experiences: Experience[] = [
    {
      date: "Mai 2025 - Presente",
      enterprise: "CIGAM Software de Gestão",
      role: "Desenvolvedor de Software",
    },
    {
      date: "Jan 2025 - Abril 2025",
      enterprise: "CIGAM Software de Gestão",
      role: "Estagiário de Desenvolvimento de Software",
    },
    {
      date: "Jun 2024 - Dez 2024",
      enterprise: "Grupo Herval",
      role: "Estagiário de TI",
    },
  ];

  const experiencesByEnterprise = experiences.reduce(
    (acc, exp) => {
      if (!acc[exp.enterprise]) {
        acc[exp.enterprise] = [];
      }

      acc[exp.enterprise].push({
        role: exp.role,
        date: exp.date,
      });

      return acc;
    },
    {} as Record<string, Role[]>,
  );

  const skills = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: BiLogoJavascript, color: "#F7DF1E" },
    { Icon: BiLogoTypescript, color: "#3178C6" },
    { Icon: DiSass, color: "#CC6699" },
    { Icon: DiNetmagazine, color: "#512BD4" },
    { Icon: DiMsqlServer, color: "#CC2927" },
    { Icon: GrOracle, color: "#F80000" },
  ];

  const [height, setHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }, []);

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
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
          <h1>Experiência Profissional</h1>

          <div className="about-section__list-experience">
            {Object.entries(experiencesByEnterprise).map(
              ([enterprise, roles]) => (
                <ExperienceCard
                  key={enterprise}
                  enterprise={enterprise}
                  roles={roles}
                />
              ),
            )}
          </div>
        </div>

        <div className="about-section__skills">
          <h1>Especialidades</h1>

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
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="about-section__carousel-dots"
          aria-label="Selecionar imagem do carrossel"
          role="tablist"
        >
          {photos.map((_, i) => (
            <button
              key={i}
              role="tab"
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
                startAutoPlay();
              }}
              aria-label={`Ir para slide ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
