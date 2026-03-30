import type { Metadata } from "next";
import "./globals.scss";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";
import Layout from "./_layout";

export const metadata: Metadata = {
  title: {
    default: "Evandro Metz - Software Developer",
    template: "%s | Evandro Metz",
  },

  description:
    "Sou Evandro Metz, Software Developer no Brasil. Crio aplicações com React, TypeScript, JavaScript, SQL e .NET — com foco em código robusto e interfaces visualmente clean.",

  keywords: [
    "Evandro Metz",
    "Software Developer Brasil",
    "Frontend Developer Portfolio",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "SQL Developer",
    ".NET Developer",
    "Design System Developer",
    "ERP Developer",
    "Dashboard Developer",
    "Web Developer Brasil",
    "Developer Portfolio",
  ],

  authors: [
    {
      name: "Evandro Metz",
      url: "https://evandrometz.com",
    },
  ],

  creator: "Evandro Metz",
  publisher: "Evandro Metz",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://evandrometz.com",
  },

  appleWebApp: {
    capable: true,
  },

  openGraph: {
    title: "Evandro Metz - Software Developer",
    description:
      "Portfolio de Evandro Metz, Software Developer no Brasil especializado em React, TypeScript, SQL e .NET — com foco em código robusto e interfaces visualmente clean.",
    url: "https://evandrometz.com",
    siteName: "Evandro Metz",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://evandrometz.com/evandro.webp",
        width: 1200,
        height: 630,
        alt: "Evandro Metz - Software Developer",
      },
    ],
    emails: ["evandro.metz@outlook.com"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evandro Metz - Software Developer",
    description:
      "Software Developer no Brasil especializado em React, TypeScript, SQL, Oracle e .NET.",
    images: ["https://evandrometz.com/evandro.webp"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-company="" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Evandro Metz",
              url: "https://evandrometz.com",
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "CIGAM",
              },
              sameAs: [
                "https://github.com/metzevandro",
                "https://linkedin.com/in/metzevandro",
              ],
            }),
          }}
        />
      </head>

      <body>
        <Layout />
        {children}
      </body>
    </html>
  );
}
