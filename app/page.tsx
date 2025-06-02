"use client";
import React, { useState } from "react";
import "./globals.scss";
import { NavItem } from "@/components/NavItem/NavItem";
import { motion, AnimatePresence } from "framer-motion";
import { CardItem } from "@/components/CardItem/CardItem";

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
      "Esta é  meu setup de trabalho, onde passo a maior parte do meu tempo desenvolvendo.",
  },
  {
    src: "evandrometz.jpg",
    alt: "Evandro Metz",
    description: "Este, sou eu :)",
  },
  {
    src: "intercambio.jpg",
    alt: "Intercâmbio",
    description:
      "Uma foto que representa saudade e aprendizado, onde representei o Brasil e minha Juventude - Estância Velha, no Chile.",
  },
];

export default function Home() {
  const [popupImg, setPopupImg] = useState<string | null>(null);
  const [imgSizes, setImgSizes] = useState<{
    [key: string]: { width: number; height: number };
  }>({});
  const imgRefs = React.useRef<{ [key: string]: HTMLImageElement | null }>({});
  const [activeSection, setActiveSection] = useState<string>("SOBRE");

  const closePopup = () => setPopupImg(null);

  const handleImgClick = (img: string) => {
    const ref = imgRefs.current[img];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setImgSizes((prev) => ({
        ...prev,
        [img]: { width: rect.width, height: rect.height },
      }));
    }
    setPopupImg(img);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // Use os ids dos navItems para buscar as seções
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
        <div className="sidebar-fixed">
          <div className="profile">
            <h4>Desenvolvedor Front End</h4>
            <h1>Evandro Metz</h1>
            <strong>Construindo minha jornada com if and elses</strong>
          </div>
          <nav>
            {navItems.map((item, idx) => (
              <NavItem
                key={idx}
                label={item.label}
                active={activeSection === item.label}
              />
            ))}
          </nav>
          <div className="social-links">
            <a aria-label="Github">Github</a>
            <a aria-label="LinkedIn">LinkedIn</a>
            <a aria-label="Instagram">Instagram</a>
          </div>
        </div>
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
            <br />
            <br />
            Atualmente, sou Desenvolvedor de Software na{" "}
            <strong>
              <a href="">CIGAM</a>
            </strong>
            , onde contribuo para a criação e manutenção do software de gestão,
            sempre mantendo um alto padrão de qualidade e eficiência.
            <br />
            <br />
            Além disso, trabalho em projetos pessoais, sempre em busca de novos
            desafios e aprendizados. Os projetos que desenvolvo vão desde{" "}
            <strong>design systems</strong> até um{" "}
            <strong>gerenciador de finanças pessoais</strong>.
            <br />
            <br />
            No meu tempo livre, se eu não estiver procrastinando, estou
            assistindo jogos do Grêmio, praticando algum esporte, ou tentando
            tocar algum instrumento.
          </p>
          <div className="images">
            {images.map((image) =>
              popupImg === image.src ? (
                <div
                  key={image.src}
                  className="img"
                  style={{
                    borderRadius: "10px",
                    background: "var(--s-color-background-default)",
                    display: "inline-block",
                    width: imgSizes[image.src]?.width,
                    height: imgSizes[image.src]?.height,
                  }}
                />
              ) : (
                <motion.img
                  key={image.src}
                  ref={(el) => {
                    imgRefs.current[image.src] = el;
                  }}
                  src={image.src}
                  alt={image.alt}
                  className="img"
                  layoutId={`popup-img-${image.src.replace(/\W/g, "")}`}
                  onClick={() => handleImgClick(image.src)}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              ),
            )}
          </div>
          <AnimatePresence>
            {popupImg && (
              <motion.div
                className="image-popup-overlay"
                onClick={closePopup}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "var(--s-color-background-overlay)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                  cursor: "zoom-out",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.img
                    src={popupImg}
                    alt="Popup"
                    layoutId={`popup-img-${popupImg.replace(/\W/g, "")}`}
                    style={{
                      maxWidth: "90vw",
                      maxHeight: "80vh",
                      borderRadius: "10px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      background: "#fff",
                      display: "block",
                    }}
                  />
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "20%", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: "100%",
                      background: "var(--s-color-background-overlay)",
                      color: "#fff",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      display: "flex",
                      padding: "1rem",
                      boxSizing: "border-box",
                      pointerEvents: "none",
                      overflow: "hidden",
                    }}
                  >
                    <p style={{ width: "100%", textAlign: "left" }}>
                      {images.find((img) => img.src === popupImg)?.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        <section className="experiencia" id="experiência">
          <CardItem
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
          <CardItem
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
          <CardItem
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
        <section className="projetos" id="projetos"></section>
      </main>
    </section>
  );
}
