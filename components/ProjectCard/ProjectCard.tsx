import './ProjectCard.scss';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <motion.div className="project-card">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="project-image"
        width={400}
        height={250}
      />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Projeto
      </a>
    </motion.div>
  );
}