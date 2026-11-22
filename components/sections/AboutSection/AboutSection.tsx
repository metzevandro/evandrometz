import { FaGithub, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
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
import { Icon } from "@/components/ui/icon/Icon";

const photos: { src: string; alt: string }[] = [
  {
    src: "/image-1.webp",
    alt: "Evandro Metz foto conceito de estúdio com bola de basquete",
  },
  { src: "/image-2.webp", alt: "Evandro Metz em intercâmbio no Chile" },
  { src: "/image-3.webp", alt: "Evandro Metz em Cristo Protetor" },
  { src: "/image-4.webp", alt: "Evandro Metz na sua Igreja" },
  { src: "/image-5.webp", alt: "Evandro Metz com Toga de Formando" },
];

type Experience = {
  date: string;
  enterprise: string;
  role: string;
  highlights?: string[];
};

const education: { institution: string; course: string; date: string }[] = [
  {
    institution: "Unisinos",
    course: "MBA em Inteligência Artificial Aplicada",
    date: "A iniciar",
  },
  {
    institution: "Universidade Feevale",
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    date: "Fev 2024 - Fev 2026",
  },
];

export function AboutSection() {
  const experiences: Experience[] = [
    {
      date: "Mai 2025 - Presente",
      enterprise: "CIGAM Software de Gestão",
      role: "Desenvolvedor de Software Júnior - CRM",
      highlights: [
        "Desenvolvimento e manutenção do módulo de CRM do ERP CIGAM em MAGIC xpa, software usado por centenas de empresas.",
        "Implementação de funcionalidades nos fluxos de CRM e Faturamento, integrando regras de negócio com analistas e usuários finais.",
        "Ciclo ágil completo (daily, planning e review), com entrega incremental de funcionalidades.",
      ],
    },
    {
      date: "Jan 2025 - Abr 2025",
      enterprise: "CIGAM Software de Gestão",
      role: "Estagiário de Desenvolvimento de Software",
      highlights: [
        "Selecionado para o programa de formação de desenvolvedores da CIGAM: MAGIC, Scrum e Kanban e o ERP CIGAM.",
        "Direcionado ao setor de CRM e Faturamento, onde me aprofundei nos fluxos e demandas dessas áreas, base para a efetivação na equipe de desenvolvimento.",
      ],
    },
    {
      date: "Jun 2024 - Dez 2024",
      enterprise: "Grupo Herval",
      role: "Estagiário de TI",
      highlights: [
        "Suporte técnico e pré-vendas: avaliação de soluções de TI para clientes corporativos e apoio ao time comercial na escolha e apresentação de produtos.",
        "Análise de especificações técnicas para garantir compatibilidade com as necessidades dos clientes.",
        "Elaboração de materiais técnicos e relatórios, com interface entre fornecedores e equipes internas.",
      ],
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
        highlights: exp.highlights,
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

  const socials = [
    {
      Icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/metzevandro",
    },
    {
      Icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/metzevandro/",
    },
    {
      Icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/evandro.metz/",
    },
  ];

  const { index, setIndex, startAutoPlay } = useCarousel(
    photos.map((p) => p.src),
    5000,
  );

  return (
    <section id="about" className="about-section">
      <h2 className="about-section__heading">Falando sobre mim</h2>

      <div className="about-section__grid">
        <div className="about-section__col">
          <div className="about-section__card about-section__story">
            <h3>Minha história</h3>
            <p>
              Desenvolvedor de Software com foco em React, TypeScript e
              arquitetura de componentes. Trabalho na interseção entre design e
              engenharia, criando interfaces visualmente consistentes e
              tecnicamente sólidas.
            </p>
            <p>
              Atualmente na CIGAM, desenvolvo e mantenho funcionalidades no
              módulo de CRM do ERP, trabalhando com fluxos de negócio complexos
              em ambiente ágil. Antes, construí do zero o Design System Zeroz,
              uma biblioteca de componentes publicada no NPM com documentação em
              Storybook, design tokens semânticos e foco em escalabilidade de
              UI.
            </p>
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas pela Feevale
              e tenho me aprofundado em ASP.NET e C# para expandir minha stack.
            </p>
          </div>

          <div className="about-section__card about-section__photo">
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

          <div className="about-section__card">
            <h3>Especialidades</h3>
            <div className="about-section__list-skills">
              {skills.map(({ Icon: SkillIcon, color, label }) => (
                <div key={label}>
                  <Tooltip content={label}>
                    <SkillIcon size={32} color={color} />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-section__col">
          <div className="about-section__card">
            <h3>Experiência profissional</h3>
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

          <div className="about-section__card">
            <h3>Formação</h3>
            <div className="about-section__list-experience">
              {education.map((e) => (
                <ExperienceCard
                  key={`${e.institution}-${e.course}`}
                  enterprise={e.institution}
                  roles={[{ role: e.course, date: e.date }]}
                />
              ))}
            </div>
          </div>

          <div className="about-section__card">
            <div className="about-section__actions">
              <a
                className="about-section__resume"
                href="/CV_Evandro_Metz.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar currículo
                <Icon name="file_save" />
              </a>
              <div className="about-section__socials">
                {socials.map(({ Icon: SocialIcon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <SocialIcon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
