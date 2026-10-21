import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";
import type { ProjectPageData } from "@/types";

export const meudim: ProjectPageData = {
  name: "MeuDim",
  year: "2026",
  accent: "var(--p-color-blue)",
  title: "Organizando as finanças de forma eficiente",
  summary:
    "App web de finanças pessoais: você lança ganhos e despesas, importa o extrato do banco em CSV e acompanha tudo em um dashboard.",
  facts: [
    { nome: "Cargo", cargo: "Desenvolvedor full stack" },
    { nome: "Plataforma", cargo: "Web" },
    { nome: "Status", cargo: "Em andamento" },
    {
      nome: "Repositório",
      cargo: "GitHub",
      link: "https://github.com/metzevandro/MeuDim",
    },
    {
      nome: "Aplicação",
      cargo: "Acessar app",
      link: "https://financas-azure.vercel.app/",
    },
  ],
  cover: {
    src: "/meudim/dashboard.webp",
    alt: "Dashboard do MeuDim com saldo, ganhos, despesas e gráfico de ganhos contra despesas",
  },
  about:
    "O MeuDim ajuda a entender para onde o dinheiro está indo. Cada pessoa tem a própria conta e registra ganhos e despesas com categoria, subcategoria, forma de pagamento e fonte de renda. Esses dados alimentam um dashboard com filtros por período.",
  features: {
    items: [
      {
        title: "Lançamentos categorizados",
        text: "Ganhos por fonte de renda; despesas por categoria, subcategoria e forma de pagamento.",
      },
      {
        title: "Importação de CSV",
        text: "Importa a fatura do cartão ou o extrato da conta (formato Nubank). Pagamentos de fatura e estornos ficam de fora, e nada é lançado sem você revisar antes.",
      },
      {
        title: "Categorização que aprende",
        text: "Ao importar, o app guarda a regra da descrição e reaproveita nas próximas vezes. “Nike Store - Parcela 2/3” e “Nike Store - Parcela 3/3” caem na mesma regra.",
      },
      {
        title: "Dashboard",
        text: "Saldo, ganhos x despesas e comparação com o período anterior, agrupados por dia, mês ou ano.",
      },
    ],
    images: [
      {
        src: "/meudim/earning.webp",
        alt: "Formulário lateral para adicionar um ganho, com data, valor e fonte de renda",
      },
    ],
  },
  stack: [
    "Next.js 14 (App Router)",
    "React 18",
    "TypeScript",
    "Auth.js v5",
    "Prisma",
    "PostgreSQL (Neon)",
    "Zod",
    "React Hook Form",
    "Design System Zeroz",
    "SCSS",
    "Vercel",
  ],
  decisions: {
    items: [
      {
        title: "Proteção de rotas em um só lugar",
        text: "Um middleware decide quem entra: páginas redirecionam para o login (guardando o destino) e a API responde 401. Uma rota nova já nasce protegida, e as queries filtram pelo usuário logado.",
      },
      {
        title: "Dinheiro como Decimal, não float",
        text: "Os valores são salvos como Decimal(12,2) no Postgres. Float acumula erro de arredondamento, o que é inaceitável em saldo.",
      },
      {
        title: "Agregação no servidor, com granularidade segura",
        text: "A API soma e agrupa os dados. Se o período não combina com a granularidade (cinco anos por dia seriam milhares de pontos), ela ajusta sozinha e devolve qual usou.",
      },
      {
        title: "Importação idempotente",
        text: "Cada linha importada tem uma chave única por usuário. Reenviar o mesmo arquivo não duplica lançamentos.",
      },
    ],
  },
  learnings: {
    text: "Foi o projeto em que mais mergulhei no back-end: modelar o banco (relações, índices, unicidade por usuário), montar a API e fazer a autenticação com senha criptografada. O CSV real é bagunçado, com descrições que variam e parcelas que se repetem, e normalizar isso deu mais trabalho do que o parser. O que falta: testes automatizados, principalmente para as regras de importação e o cálculo do dashboard.",
    images: [
      {
        src: "/meudim/login.webp",
        alt: "Tela de login do MeuDim com e-mail e senha",
      },
    ],
  },
  role: (
    <>
      Fui responsável por todo o desenvolvimento: banco de dados, API,
      autenticação, interface e deploy na Vercel. A interface é construída com o{" "}
      <AnimatedLink href="/design-system-zeroz">
        Design System Zeroz
      </AnimatedLink>
      , outro projeto que também desenvolvi.
    </>
  ),
};
