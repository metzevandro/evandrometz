"use client";

import Footer from "@/components/footer/footer";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "@/components/header/header";
import { Icon } from "design-system-zeroz";

export default function Home() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".main-header");
    if (header) {
      setHeight(header.offsetHeight);
    }
  }, []);

  return (
    <>
      <motion.main
        className="home-main"
        style={{ paddingTop: height }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className="first-section">
          <div className="image-container">
            <div className="text-container">
              <h2 style={{ whiteSpace: "nowrap" }}>
                Desenvolvedor na{" "}
                <a
                  href="https://www.cigam.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cigam-link"
                  style={{ whiteSpace: "nowrap" }}
                >
                  CIGAM
                </a>
              </h2>
              <h1>Front-End</h1>
              <NavLink href="/#project">
                Scroll
                <Icon icon="keyboard_arrow_down" size="md" />
              </NavLink>
            </div>
            <img className="evandrometz " src="evandrometz.jpg" alt="" />
          </div>
        </section>
      </motion.main>
      <motion.main
        id="project"
        className="projects-main"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className="section-projects">
          <div className="projects-header">
            <p className="projects-caption">Meus</p>
            <h1>Projetos</h1>
          </div>
          <div className="projects-list">
            <div className="project-card">
              <h3>Projeto 1</h3>
            </div>
            <div className="project-card">
              <h3>Projeto 2</h3>
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
