"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import "./globals.scss";
import { Icon } from "design-system-zeroz";

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovering, setHovering] = useState(false);
  const [hoveringButton, setHoveringButton] = useState(false);

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
          className="cursor-light"
          style={{
            position: "fixed",
            top: y,
            left: x,
            translateX: 0,
            translateY: 0,
          }}
          animate={{ scale: hoveringButton ? 2 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <section className="information-section">
        <div className="left">
          <div className="texts">
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
              style={{ display: "inline-block", overflow: "hidden", width: 0 }}
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
              src="Evandro Metz.jpg"
              alt="Foto de Evandro"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>
        </div>
      </section>

      <section className="projetos" id="projetos">
        Projetos
      </section>
    </motion.main>
  );
}
