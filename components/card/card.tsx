"use client";

import { motion } from "framer-motion";
import "./card.scss";

interface CardProps {
  index: number;
  hovered: number | null;
  setHovered: (index: number | null) => void;
  setHoveringProject: (v: boolean) => void;

  image?: string;
  title?: string;
  nome?: string;
  tempo?: string;
}

export default function Card({
  index,
  hovered,
  setHovered,
  image = "/",
  title = "Título do Projeto",
  nome = "Descrição do projeto desenvolvido.",
  tempo = "2025",
  setHoveringProject,
}: CardProps) {
  const totalCards = 3;

  const widthPercentage =
    hovered === null ? 100 / totalCards : hovered === index ? 50 : 40;

  return (
    <motion.div
      className="project-card"
      onMouseEnter={() => {
        setHovered(index);
        setHoveringProject?.(true);
      }}
      onMouseLeave={() => {
        setHovered(null);
        setHoveringProject?.(false);
      }}
      animate={{ width: `${widthPercentage}%` }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div className="project-image-wrapper">
        <motion.img
          src={image}
          alt={title}
          className="project-image"
          animate={{ scale: hovered === index ? 1.1 : 1 }}
          transition={{ duration: 0.35 }}
        />
      </div>

      <motion.div className="project-content" transition={{ duration: 0.2 }}>
        <h2>{title}</h2>
        <p>
          {nome} - {tempo}
        </p>
        <div></div>
      </motion.div>
    </motion.div>
  );
}
