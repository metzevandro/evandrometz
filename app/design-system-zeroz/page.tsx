import type { Metadata } from "next";
import DesignSystemZerozContent from "./PageContent";

export const metadata: Metadata = {
  title: "Design System Zeroz – Biblioteca de Componentes React",
  description:
    "Design System open source criado por Evandro Metz com React, TypeScript e SCSS. Componentes reutilizáveis documentados no Storybook e publicados no npm, com foco em escalabilidade, acessibilidade e consistência visual.",

  keywords: [
    "Design System Zeroz",
    "Evandro Metz",
    "biblioteca de componentes React",
    "TypeScript SCSS Storybook",
    "design system open source",
    "npm componentes UI",
    "design tokens Figma",
    "acessibilidade frontend",
  ],

  alternates: {
    canonical: "https://evandrometz.com.br/design-system-zeroz",
  },

  openGraph: {
    title:
      "Design System Zeroz – Biblioteca de Componentes React | Evandro Metz",
    description:
      "Biblioteca de componentes open source com React, TypeScript e SCSS. Documentada no Storybook, publicada no npm, com design tokens e foco em acessibilidade.",
    url: "https://evandrometz.com.br/design-system-zeroz",
    siteName: "Evandro Metz",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "https://evandrometz.com.br/design-system-zeroz/homepage.webp",
        width: 1200,
        height: 630,
        alt: "Visão geral do Design System Zeroz no Storybook",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Design System Zeroz | Evandro Metz",
    description:
      "Biblioteca de componentes React open source com TypeScript, SCSS, Storybook e publicação no npm.",
    images: ["https://evandrometz.com.br/design-system-zeroz/homepage.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Design System Zeroz",
  url: "https://zeroz.vercel.app/",
  codeRepository: "https://github.com/metzevandro/Zeroz",
  description:
    "Biblioteca de componentes React open source com TypeScript e SCSS, documentada no Storybook e distribuída via npm. Focada em escalabilidade, consistência visual e acessibilidade.",
  author: {
    "@type": "Person",
    name: "Evandro Metz",
    url: "https://evandrometz.com.br",
  },
  datePublished: "2024-01-01",
  programmingLanguage: ["TypeScript", "JavaScript", "SCSS"],
  runtimePlatform: ["React", "Storybook", "npm"],
  license: "https://opensource.org/licenses/MIT",
  screenshot: "https://evandrometz.com.br/design-system-zeroz/homepage.webp",
};

export default function DesignSystemZeroz() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DesignSystemZerozContent />
    </>
  );
}
