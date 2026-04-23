import type { Metadata } from "next";
import MeuDimContent from "./PageContent";

export const metadata: Metadata = {
  title: "MeuDim – Gestão Financeira Pessoal",
  description:
    "MeuDim é uma plataforma web de gestão financeira pessoal com dashboards, categorização de despesas e receitas, e análise de padrões de gastos. Desenvolvido por Evandro Metz com Next.js.",

  keywords: [
    "MeuDim",
    "Evandro Metz",
    "gestão financeira pessoal",
    "controle de despesas",
    "dashboard financeiro",
    "React TypeScript finanças",
    "Next.js projeto financeiro",
  ],

  alternates: {
    canonical: "https://evandrometz.com.br/meudim",
  },

  openGraph: {
    title: "MeuDim – Gestão Financeira Pessoal | Evandro Metz",
    description:
      "Plataforma web de controle financeiro com categorização, dashboards e análise de padrões de gastos e receitas. Desenvolvido com Next.js e TypeScript.",
    url: "https://evandrometz.com.br/meudim",
    siteName: "Evandro Metz",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "https://evandrometz.com.br/meudim/dashboard.webp",
        width: 1200,
        height: 630,
        alt: "Dashboard do MeuDim – visão geral de finanças pessoais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MeuDim – Gestão Financeira Pessoal | Evandro Metz",
    description:
      "Plataforma de controle de despesas e receitas com dashboards inteligentes e categorização completa.",
    images: ["https://evandrometz.com.br/meudim/dashboard.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MeuDim",
  url: "https://financas-azure.vercel.app/",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "Plataforma completa de gestão financeira pessoal com categorização de despesas e receitas, múltiplas formas de pagamento, dashboards visuais e análise de padrões financeiros.",
  author: {
    "@type": "Person",
    name: "Evandro Metz",
    url: "https://evandrometz.com.br",
  },
  datePublished: "2025-01-01",
  programmingLanguage: ["TypeScript", "JavaScript"],
  runtimePlatform: ["Next.js", "React"],
  codeRepository: "https://github.com/metzevandro/MeuDim",
  screenshot: "https://evandrometz.com.br/meudim/dashboard.webp",
};

export default function MeuDim() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MeuDimContent />
    </>
  );
}
