import './ProjectCard.scss';

import { motion } from 'framer-motion';
import React from 'react';

export function ProjectCard({

}: {

}) {
  return (
    <motion.div className="project-card">
      <img  className="project-image" />
      <h3 className="project-title"></h3>
      <p className="project-description"></p>
      <a  target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Projeto
      </a>
    </motion.div>
  );
}