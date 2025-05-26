"use client";

import Footer from "@/components/footer/footer";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        style={{ marginTop: height }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Desenvolvedor</h2>
        <h1>Front-End</h1>
      </motion.main>
      <Footer />
    </>
  );
}
