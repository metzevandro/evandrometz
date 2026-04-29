import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { DiMsqlServer, DiSass, DiNetmagazine } from "react-icons/di";
import { GrOracle } from "react-icons/gr";

import { motion } from "framer-motion";

import "./AboutSection.scss";
import Image from "next/image";
import { ExperienceCard } from "@/components/ui/experienceCard/ExperienceCard";
import { Role } from "@/types";
import { useCarousel } from "@/lib/utils/carousel";
import Tooltip from "@/components/ui/tooltip/Tooltip";

const photos: { src: string; alt: string }[] = [
  { src: "/image-1.webp", alt: "Evandro Metz foto conceito de estúdio com bola de basquete" },
  { src: "/image-2.webp", alt: "Evandro Metz em intercâmbio no Chile" },
  { src: "/image-3.webp", alt: "Evandro Metz em Cristo Protetor" },
  { src: "/image-4.webp", alt: "Evandro Metz na sua Igreja" },
  { src: "/image-5.webp", alt: "Evandro Metz com Toga de Formando" },
];

type Experience = {
  date: string;
  enterprise: string;
  role: string;
};

export function AboutSection() {
  const experiences: Experience[] = [
    {
      date: "Mai 2025 - Presente",
      enterprise: "CIGAM Software de Gestão",
      role: "Desenvolvedor de Software Júnior - CRM",
    },
    {
      date: "Jan 2025 - Abr 2025",
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
    { Icon: FaReact, color: "#61DAFB", label: "React" },
    { Icon: BiLogoJavascript, color: "#F7DF1E", label: "JavaScript" },
    { Icon: BiLogoTypescript, color: "#3178C6", label: "TypeScript" },
    { Icon: DiSass, color: "#CC6699", label: "Sass" },
    { Icon: DiNetmagazine, color: "#512BD4", label: ".NET" },
    { Icon: DiMsqlServer, color: "#CC2927", label: "SQL Server" },
    { Icon: GrOracle, color: "#F80000", label: "Oracle" },
  ];

  const { index, height, containerRef, setIndex, startAutoPlay } = useCarousel(
    photos.map((p) => p.src),
    5000,
  );

  return (
    <section id="about" className="about-section">
      <div className="about-section__container" ref={containerRef}>
        <div className="about-section__title">
          <h2>Falando sobre mim</h2>
          <p>
            Sou desenvolvedor com foco em transformar interfaces em soluções
            concretas e bem construídas para o usuário, unindo design cuidadoso
            com engenharia robusta. Atuo na interseção entre design e
            desenvolvimento, criando experiências visualmente consistentes, com
            foco em desempenho e usabilidade.
          </p>
        </div>

        <div className="about-section__experience">
          <h3>Experiência Profissional</h3>
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
          <h3>Especialidades</h3>
          <div className="about-section__list-skills">
            {skills.map(({ Icon, color, label }, index) => (
              <div key={index}>
                <Tooltip content={label}>
                  <Icon size={32} color={color} />
                </Tooltip>
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
                  src={photo.src}
                  alt={photo.alt}
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