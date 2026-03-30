export interface CourseProps {
  date: string;
  title: string;
  description: string;
}

export interface Role {
  role: string;
  date: string;
  description: string;
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
  | "Home"
  | "Zeroz"
  | "MeuDim"
  | "PortalCidadaoEstanciaVelha";
