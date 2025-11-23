"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import "./globals.scss";
import { Icon } from "design-system-zeroz";
import Card from "@/components/card/card";

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovering, setHovering] = useState(false);
  const [hoveringButton, setHoveringButton] = useState(false);
  const [hoveringProject, setHoveringProject] = useState(false);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToProjetos = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.main
      className="home"
      onMouseMove={(e) => {
        const offset = hoveringButton ? 12 : 6;
        x.set(e.clientX - offset);
        y.set(e.clientY - offset);
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering && (
        <motion.div
          className={`cursor-light ${hoveringProject ? "cursor-big" : ""}`}
          style={{
            top: y,
            left: x,
            mixBlendMode: hoveringProject ? "inherit" : "difference",
            translateX: hoveringProject ? "-50%" : 0,
            translateY: hoveringProject ? "-50%" : 0,
          }}
          animate={{ scale: hoveringButton ? 2 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {hoveringProject && (
            <>
              <motion.svg
                className="cursor-circle-text"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="
        M 50, 50
        m -35, 0
        a 35,35 0 1,1 70,0
        a 35,35 0 1,1 -70,0
      "
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="8"
                  fontWeight="600"
                  letterSpacing="0.75"
                  fontFamily="Inter"
                >
                  <textPath href="#circlePath">
                    VER MAIS • VER MAIS • VER MAIS • VER MAIS •
                  </textPath>
                </text>
              </motion.svg>

              <div className="cursor-center-icon">
                <Icon icon="arrow_outward" size="lg" fill />
              </div>
            </>
          )}
        </motion.div>
      )}

      <section className="information-section">
        <div className="left">
          <div className="texts">
            <h2>
              Olá, eu sou{" "}
              <motion.small
                className="wave"
                animate={{ rotate: [0, 10, -10, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.small>
              <br />
              <span className="highlight-name">Evandro Metz</span>
            </h2>
            <div>
              Desenvolvedor de Software na{" "}
              <motion.a
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}
                href="https://www.cigam.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="cigam-link"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: { opacity: 1 },
                  hover: {},
                }}
              >
                <span>CIGAM</span>

                <motion.div
                  className="underline"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
            <p>
              Comprometido em transformar interfaces abstratas em projetos
              concretos e sólidos para o usuário, unindo design cuidadoso com
              engenharia robusta.
            </p>
          </div>

          <motion.button
            className="projects-btn"
            initial="initial"
            whileHover="hover"
            onMouseEnter={() => setHoveringButton(true)}
            onMouseLeave={() => setHoveringButton(false)}
            onClick={scrollToProjetos}
          >
            <Icon icon="arrow_downward" size="md" />

            <motion.span
              className="btn-text"
              style={{ overflow: "hidden" }}
              variants={{
                initial: { width: 0 },
                hover: { width: "auto" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Explorar trabalhos
            </motion.span>
          </motion.button>
        </div>

        <div className="right">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "var(--s-border-radius-medium)",
            }}
          >
            <motion.img
              onMouseEnter={() => setHoveringButton(true)}
              onMouseLeave={() => setHoveringButton(false)}
              src="Evandro.jpg"
              alt="Foto de Evandro"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 50 }}
            />
          </div>
        </div>
      </section>

      <section className="projetos" id="projetos">
        <div className="titles">
          <small>PORTFÓLIO</small>
          <h1>Projetos Desenvolvidos</h1>
        </div>
        <motion.div layout className="projects-card">
          <Card
            index={2}
            hovered={hoveredCard}
            setHovered={setHoveredCard}
            setHoveringProject={setHoveringProject}
            title="Facilitando o acesso aos serviços da Prefeitura"
            nome="Portal do Cidadão de Estância Velha"
            tempo="2025"
            image="/portal-cidadao.png"
          />
          <Card
            index={1}
            hovered={hoveredCard}
            setHovered={setHoveredCard}
            setHoveringProject={setHoveringProject}
            title="Organizando as finanças de forma eficiente"
            image="/MeuDim.png"
            nome="MeuDim"
            tempo="2025"
          />
          <Card
            index={0}
            hovered={hoveredCard}
            setHovered={setHoveredCard}
            setHoveringProject={setHoveringProject}
            image="/Zeroz.png"
            title="Construindo um Design System escalável"
            nome="Design System Zeroz"
            tempo="2024"
          />
        </motion.div>
      </section>
    </motion.main>
  );
}
