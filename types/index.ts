import type { ReactNode } from "react";

export interface CourseProps {
  date: string;
  title: string;
  description: string;
}

export interface Role {
  role: string;
  date: string;
}

export interface ExperienceCardProps {
  enterprise: string;
  roles: Role[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  projectUrl: string;
}

export interface LinhaProps {
  nome: string;
  cargo: string;
  link?: string;
}

export interface DetailItem {
  nome: string;
  cargo: string;
  link?: string;
}

export interface MobileImage {
  src: string;
  alt: string;
}

export type AnimatedLiquidBackgroundPreset =
  "Home" | "Zeroz" | "MeuDim" | "PortalCidadaoEstanciaVelha";

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectItem {
  title: string;
  text: ReactNode;
}

export interface ProjectPageData {
  name: string;
  year: string;
  accent: string;
  title: string;
  summary: string;
  facts: LinhaProps[];
  cover: ProjectImage;
  about: ReactNode;
  features: { items: ProjectItem[]; images?: ProjectImage[] };
  stack: string[];
  decisions: { items: ProjectItem[]; images?: ProjectImage[] };
  learnings: { text: ReactNode; images?: ProjectImage[] };
  role: ReactNode;
  mobile?: ProjectImage[];
}
