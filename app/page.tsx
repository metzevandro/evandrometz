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
            <img className="computer" src="/pc.jpg" alt="" />
            <img className="evandrometz " src="evandrometz.jpg" alt="" />
          </div>
          <div className="containter-text-section">
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
            </div>
            <NavLink href="/portfolio">
              Scroll
              <Icon icon="keyboard_arrow_down" size="md" />
            </NavLink>
          </div>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
