import type { Metadata } from "next";
import PortalCidadaoEstanciaVelhaContent from "./PageContent";

export const metadata: Metadata = {
  title: "Portal do Cidadão Estância Velha",
  description:
    "Aplicação web e mobile para registro de ocorrências urbanas com geolocalização, upload de imagens e envio direto à Prefeitura de Estância Velha. Desenvolvido por Evandro Metz com Next.js, Firebase e Google Maps API.",

  keywords: [
    "Portal do Cidadão Estância Velha",
    "Evandro Metz",
    "Next.js Firebase Google Maps",
    "geolocalização GeoJSON",
    "registro de ocorrências urbanas",
    "React TypeScript projeto",
    "prefeitura digital",
  ],

  alternates: {
    canonical: "https://evandrometz.com.br/portal-cidadao-estancia-velha",
  },

  openGraph: {
    title: "Portal do Cidadão Estância Velha | Evandro Metz",
    description:
      "Aplicação web e mobile para registro de ocorrências urbanas com geolocalização e envio direto à prefeitura. Desenvolvido com Next.js, Firebase e Google Maps API.",
    url: "https://evandrometz.com.br/portal-cidadao-estancia-velha",
    siteName: "Evandro Metz",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "https://evandrometz.com.br/portal-cidadao/homepage.webp",
        width: 1200,
        height: 630,
        alt: "Homepage do Portal do Cidadão de Estância Velha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portal do Cidadão Estância Velha | Evandro Metz",
    description:
      "Registro de ocorrências urbanas com pin no mapa, upload de imagens e envio automático à prefeitura.",
    images: ["https://evandrometz.com.br/portal-cidadao/homepage.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Portal do Cidadão – Estância Velha",
  url: "https://portal-cidadao-estancia-velha.vercel.app/",
  applicationCategory: "GovernmentApplication",
  operatingSystem: "Web, Android, iOS",
  description:
    "Plataforma web e mobile para registro de ocorrências urbanas com geolocalização, upload de imagens e envio direto aos setores responsáveis da Prefeitura de Estância Velha.",
  author: {
    "@type": "Person",
    name: "Evandro Metz",
    url: "https://evandrometz.com.br",
  },
  datePublished: "2025-01-01",
  programmingLanguage: ["TypeScript", "JavaScript"],
  runtimePlatform: ["Next.js", "Firebase", "Google Maps API"],
  codeRepository:
    "https://github.com/metzevandro/portal-cidadao-estancia-velha",
  screenshot: "https://evandrometz.com.br/portal-cidadao/homepage.webp",
};

export default function PortalCidadaoEstanciaVelha() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortalCidadaoEstanciaVelhaContent />
    </>
  );
}
