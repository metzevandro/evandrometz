"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./loader.scss";

export default function Loader() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const deployLines = [
    "> Construindo interface...",
    "> Buscando projetos...",
    "> Inicializando animações...",
    "> Preparando portfólio...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => s + 1);
    }, 1800);

    if (step > deployLines.length) clearInterval(interval);

    const end = setTimeout(() => setFinished(true), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(end);
    };
  }, [step]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={finished ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="loader-wrapper terminal-font"
    >
      <ScrambleName />
    </motion.div>
  );
}

function ScrambleName() {
  const sequence = [
    "X!v@d#o M3tZ",
    "Evn^d?o Me9z",
    "Evand0 MetZ",
    "Evandro Metz",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1 < sequence.length ? i + 1 : i));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      key={sequence[index]}
      className="scramble-text terminal-font"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {sequence[index]}
    </motion.h1>
  );
}
