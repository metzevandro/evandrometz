import type { ProjectPageData } from "@/types";
import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";

export const zeroz: ProjectPageData = {
  name: "Design System Zeroz",
  year: "2024",
  accent: "var(--p-color-purple)",
  title: "Construindo um Design System escalável",
  summary:
    "Biblioteca de componentes React open source, com tokens de design, documentação no Storybook e publicação no npm. Já é a base de interface do MeuDim.",
  facts: [
    { nome: "Cargo", cargo: "Desenvolvedor front-end" },
    { nome: "Plataforma", cargo: "Web • npm" },
    { nome: "Status", cargo: "Em andamento" },
    {
      nome: "Repositório",
      cargo: "GitHub",
      link: "https://github.com/metzevandro/Zeroz",
    },
    {
      nome: "Documentação",
      cargo: "Storybook",
      link: "https://zeroz.vercel.app/",
    },
    {
      nome: "Pacote",
      cargo: "npm",
      link: "https://www.npmjs.com/package/design-system-zeroz",
    },
  ],
  cover: {
    src: "/design-system-zeroz/homepage.webp",
    alt: "Página inicial do Storybook do Zeroz com a lista de componentes e gráficos",
  },
  about:
    "O Zeroz padroniza a interface de qualquer projeto: são 47 componentes (de Button e Input a DataTable e AppShell) e 3 gráficos, todos com o mesmo visual e o mesmo comportamento. A ideia é parar de reescrever o mesmo modal em cada projeto.",
  features: {
    items: [
      {
        title: "Componentes de produto",
        text: "Além dos básicos, traz peças maiores como DataTable, DatePicker, Modal, Notification, Savebar e AppShell.",
      },
      {
        title: "Gráficos",
        text: "BarChart, LineChart e PieChart sobre o Recharts, com legenda, tooltip, variações empilhadas e estado de skeleton.",
      },
      {
        title: "Temas",
        text: (
          <>
            Tema claro/escuro com <code>data-theme</code> e cor da marca com{" "}
            <code>data-company</code> na tag <code>html</code>.
          </>
        ),
      },
      {
        title: "Fácil de instalar",
        text: (
          <>
            <code>npm install design-system-zeroz</code>, um import de CSS e
            está pronto para usar.
          </>
        ),
      },
    ],
    images: [
      {
        src: "/design-system-zeroz/charts.webp",
        alt: "Documentação do BarChart no Storybook, com variações e tabela de props",
      },
    ],
  },
  stack: [
    "React",
    "TypeScript",
    "SCSS",
    "Storybook 10",
    "Recharts",
    "Rollup",
    "Chromatic",
    "npm",
  ],
  decisions: {
    items: [
      {
        title: "Tokens em camadas",
        text: "Primitivos (a paleta crua), de marca (escolhidos por data-company) e semânticos (o papel: cor de borda, de conteúdo, de fundo). Os componentes usam os semânticos, então trocar de tema ou de marca não exige mexer em componente.",
      },
      {
        title: "Build para quem consome",
        text: "O Rollup gera ESM, CJS e tipos (.d.ts), e o campo exports do package.json permite importar só o componente necessário, como design-system-zeroz/Button.",
      },
      {
        title: "API tipada e documentada",
        text: "Cada componente tem seu arquivo de tipos e suas stories. O Storybook monta a tabela de props e os controles a partir deles, então a documentação não fica desatualizada.",
      },
    ],
    images: [
      {
        src: "/design-system-zeroz/componente.webp",
        alt: "Documentação do componente Badge no Storybook, com tabela de props e controles",
      },
    ],
  },
  learnings: {
    text: "O desafio foi sair do “componente bonito” para o “componente confiável”: semântica correta, contraste, foco e navegação por teclado, além de manter as variantes consistentes. O addon de acessibilidade do Storybook pega muita coisa cedo, mas não substitui testar com teclado. Também aprendi a tratar a biblioteca como produto: versionar, não quebrar quem usa e documentar. O que falta: testes automatizados dos componentes, já que hoje a garantia vem do Storybook e do Chromatic.",
    images: [
      {
        src: "/design-system-zeroz/props.webp",
        alt: "Story do AppShell no Storybook com a aba de acessibilidade ao lado dos controles",
      },
    ],
  },
  role: (
    <>
      Fui responsável pela engenharia: componentes em TypeScript, design tokens,
      arquitetura, Storybook, build e publicação no npm. O design visual foi
      feito no Figma pelo{" "}
      <AnimatedLink target="_blank" href="https://augustometz.com.br/">
        Augusto Metz
      </AnimatedLink>
      . Hoje o Zeroz é a base de interface do{" "}
      <AnimatedLink href="/meudim">MeuDim</AnimatedLink>.
    </>
  ),
};
