import type { Metadata } from "next";
import "./globals.scss";
import "design-system-zeroz/dist/index.esm.css";
import "design-system-zeroz/src/scss/tokens/tokens.scss";
import { Layout } from "./_layout/layout";
import Loader from "./_loader/loader";

export const metadata: Metadata = {
  title: "Evandro Metz",
  description: "Evandro Metz - Desenvolvedor Frontend",
  keywords: [
    "Evandro Metz",
    "Desenvolvedor Frontend",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "UI",
    "Web Developer",
    "Portfólio",
  ],
  authors: [{ name: "Evandro Metz", url: "https://evandrometz.com" }],
  creator: "Evandro Metz",
  openGraph: {
    title: "Evandro Metz - Desenvolvedor Frontend",
    description:
      "Portfólio de Evandro Metz, especialista em desenvolvimento frontend com React e Next.js.",
    url: "https://evandrometz.com",
    siteName: "Evandro Metz",
    images: [
      {
        url: "https://evandrometz.vercel.app/Evandro Metz.jpg",
        width: 1200,
        height: 630,
        alt: "Evandro Metz - Desenvolvedor Frontend",
      },
    ],
    locale: "pt_BR",
    type: "website",
    emails: ["evandro.metz@outlook.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-company="" data-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <Loader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
