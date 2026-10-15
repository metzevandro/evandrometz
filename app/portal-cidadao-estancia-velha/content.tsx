import type { ProjectPageData } from "@/types";

export const portal: ProjectPageData = {
  name: "Portal do Cidadão de Estância Velha",
  year: "2025",
  accent: "var(--p-color-green)",
  title: "Facilitando o acesso aos serviços da Prefeitura",
  summary:
    "Plataforma web e mobile para registrar ocorrências urbanas: o cidadão marca o local no mapa, anexa uma foto e a solicitação chega à Prefeitura, sem ligação nem fila.",
  facts: [
    { nome: "Cargo", cargo: "Desenvolvedor full stack" },
    { nome: "Plataforma", cargo: "Web • Mobile" },
    { nome: "Status", cargo: "Concluído" },
    {
      nome: "Repositório",
      cargo: "GitHub",
      link: "https://github.com/metzevandro/portal-cidadao-estancia-velha",
    },
    {
      nome: "Aplicação",
      cargo: "Acessar app",
      link: "https://portal-cidadao-estancia-velha.vercel.app/",
    },
  ],
  cover: {
    src: "/portal-cidadao/homepage.webp",
    alt: "Página inicial do Portal do Cidadão com contadores por status, mapa e detalhes de uma solicitação",
  },
  about:
    "Quem mora em Estância Velha precisa de um canal simples para avisar a Prefeitura sobre problemas na cidade, como uma lâmpada queimada ou um animal abandonado. No Portal, a pessoa marca o ponto no mapa, escolhe o tipo de ocorrência, descreve e anexa uma foto. A solicitação vai para os setores responsáveis e dá para acompanhar o andamento: em análise, pendente ou concluída.",
  features: {
    items: [
      {
        title: "Solicitação em um único fluxo",
        text: "Pin no mapa ou busca por endereço, tipo de ocorrência, descrição e foto enviada direto do celular.",
      },
      {
        title: "Categorias com identidade no mapa",
        text: "Iluminação, pavimentação, limpeza, animais e outros problemas urbanos, cada um com seu ícone no mapa.",
      },
      {
        title: "Acompanhamento",
        text: "Contadores por status na página inicial e uma área com as solicitações de cada pessoa.",
      },
      {
        title: "Web e mobile",
        text: "A interface é responsiva: o mesmo fluxo funciona no computador e no celular.",
      },
    ],
    images: [
      {
        src: "/portal-cidadao/funcionalidade.webp",
        alt: "Formulário de nova solicitação com busca de endereço, tipo de ocorrência, descrição e foto",
      },
      {
        src: "/portal-cidadao/mapa.webp",
        alt: "Mapa de Estância Velha com ocorrências marcadas por ícones de cada categoria",
        width: 1110,
        height: 692,
      },
    ],
  },
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Firebase",
    "Firebase Auth",
    "Google Maps API",
    "GeoJSON",
    "SCSS",
    "Vercel",
  ],
  decisions: {
    items: [
      {
        title: "Só dentro dos limites da cidade",
        text: "O contorno de Estância Velha é um polígono GeoJSON, e cada ponto escolhido no mapa é validado contra ele. Assim a Prefeitura não recebe ocorrência de fora do município.",
      },
      {
        title: "Backend serverless",
        text: "Banco de dados e backend no Firebase, com Firebase Auth para o login. Não há servidor para manter, e o deploy contínuo na Vercel cuida do resto.",
      },
    ],
  },
  learnings: {
    text: "O maior desafio foi integrar a geolocalização ao mapa respeitando os limites reais de Estância Velha, algo que eu nunca tinha feito. Precisei aprender polígonos GeoJSON, validar coordenadas dentro de um limite e renderizar tudo com a API do Google Maps. Resolver isso foi um ponto de virada e abriu um campo novo para mim: mapas interativos.",
    images: [
      {
        src: "/portal-cidadao/mapa2.webp",
        alt: "Mapa com o contorno do município de Estância Velha destacado",
        width: 1109,
        height: 691,
      },
    ],
  },
  role: "Fui responsável por todo o desenvolvimento, da arquitetura ao deploy: modelagem do banco de dados, interface web e mobile, integração com mapas e configuração do ambiente de produção na Vercel.",
  mobile: [
    {
      src: "/portal-cidadao/mobile1.webp",
      alt: "Tela mobile do Portal do Cidadão – página inicial com contadores por status e mapa",
      width: 738,
      height: 1600,
    },
    {
      src: "/portal-cidadao/mobile3.webp",
      alt: "Tela mobile do Portal do Cidadão – menu lateral de navegação",
      width: 738,
      height: 1600,
    },
    {
      src: "/portal-cidadao/mobile2.webp",
      alt: "Tela mobile do Portal do Cidadão – detalhe de uma solicitação com foto e status",
      width: 738,
      height: 1600,
    },
  ],
};
