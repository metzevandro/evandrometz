"use client";
import React, { useState } from "react";
import "./globals.scss";
import { JobCard } from "@/components/JobCard/JobCard";
import { SidebarHeader } from "@/components/SidebarHeader/SidebarHeader";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";

const navItems = [
  { label: "SOBRE" },
  { label: "EXPERIÊNCIA" },
  { label: "PROJETOS" },
];

const images = [
  {
    src: "pc.jpg",
    alt: "PC",
    description:
      "Esta é  meu setup de trabalho, onde passo a maior parte do meu tempo.",
  },
  {
    src: "evandrometz.jpg",
    alt: "Evandro Metz",
    description: "Este, sou eu 🤙",
  },
  {
    src: "intercambio.jpg",
    alt: "Intercâmbio",
    description:
      "Uma foto que representa saudade e aprendizado, onde representei o Brasil e minha Juventude - Estância Velha, no Chile.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("SOBRE");

  React.useEffect(() => {
    const handleScroll = () => {
      let found = navItems[0].label;
      for (let i = 0; i < navItems.length; i++) {
        const id = navItems[i].label.toLowerCase();
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            found = navItems[i].label;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="home-container">
      <header className="sidebar">
        <SidebarHeader activeSection={activeSection} navItems={navItems} />
      </header>
      <main className="scrollable-content">
        <section className="sobre" id="sobre">
          <p>
            Sou desenvolvedor e tenho paixão por transformar interfaces
            abstratas em projetos concretos e sólidos para o usuário, unindo
            design cuidadoso com engenharia robusta. Meu trabalho favorito está
            na interseção entre design e desenvolvimento, criando experiências
            que não apenas são visualmente atraentes, mas também meticulosamente
            construídas com foco em desempenho e usabilidade.
          </p>
          <p>
            {" "}
            Atualmente, sou Desenvolvedor de Software na{" "}
            <strong>
              <a href="">CIGAM</a>
            </strong>
            , onde contribuo para a criação e manutenção do software de gestão,
            sempre mantendo um alto padrão de qualidade e eficiência.
          </p>
          <p>
            Além disso, trabalho em projetos pessoais, sempre em busca de novos
            desafios e aprendizados. Os projetos que desenvolvo vão desde{" "}
            <strong>design systems</strong> até um{" "}
            <strong>gerenciador de finanças pessoais</strong>.{" "}
          </p>
          <p>
            No meu tempo livre, se eu não estiver procrastinando, estou
            assistindo jogos do Grêmio, praticando algum esporte, ou tentando
            tocar algum instrumento.
          </p>
          <ImageGallery images={images} />
        </section>
        <section className="experiencia" id="experiência">
          <JobCard
            color="ff7811"
            urlCompany="https://www.cigam.com.br/"
            companyName="CIGAM Software"
            period={{ start: "Mai/2025", end: "Presente" }}
            title="Desenvolvedor de Software Júnior"
            badges={["MAGIC", "C#", ".NET", "CRM"].map((label) => ({
              label,
            }))}
            description="Trabalho no desenvolvimento de soluções no módulo de Faturamento e CRM do sistema ERP, contribuindo com melhorias contínuas, correções e entrega de novas funcionalidades em projetos de pequeno porte."
          />
          <JobCard
            color="ff7811"
            urlCompany="https://www.cigam.com.br/"
            companyName="CIGAM Software"
            period={{ start: "Jan/2025", end: "Mai/2025" }}
            title="Formação de Dev's"
            badges={["MAGIC", "SCRUM", "Kanban", "ERP"].map((label) => ({
              label,
            }))}
            description="Participei do programa de formação de desenvolvedores da CIGAM, onde aprofundei meus conhecimentos sobre o sistema ERP da empresa, suas diversas regras de negócio, a linguagem MAGIC e metodologias de desenvolvimento ágil."
          />
          <JobCard
            color="E10000"
            urlCompany="https://herval.com.br/"
            companyName="Grupo Herval"
            period={{ start: "Jun/2024", end: "Dez/2024" }}
            title="Estágio em HelpDesk/TI"
            badges={["HelpDesk", "TI", "Suporte"].map((label) => ({
              label,
            }))}
            description="Trabalhei no suporte técnico e manutenção de sistemas internos e lojas do Grupo, auxiliando na resolução de problemas e na implementação de melhorias. Aprendi a lidar com diferentes tecnologias e a importância do atendimento ao cliente. Atuei também como Pré Vendas, auxiliando na seleção de produtos e serviços para clientes e parceiros."
          />
        </section>
        <section className="projetos" id="projetos">
        </section>
      </main>
    </section>
  );
}
