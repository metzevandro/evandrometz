# evandrometz.com.br

Meu portfólio pessoal. Construído com Next.js, animações em WebGL e uma obsessão por detalhe que provavelmente não era necessária — mas valeu a pena.

🔗 **[evandrometz.com.br](https://evandrometz.com.br)**

---

## Por que construir do zero?

Templates existem. Framer existe. Mesmo assim optei por construir tudo à mão — porque portfólio é o único projeto onde você tem liberdade total, e eu queria usar essa liberdade pra mostrar como eu penso código, não só o que eu já fiz.

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilo | SCSS Modules |
| Animações | Framer Motion + WebGL (shaders customizados) |
| Ícones | Material Symbols |
| Deploy | Vercel |

---

## Decisões técnicas

**Animação de fundo em WebGL**
O background líquido animado não é CSS nem SVG — é um fragment shader rodando em WebGL via Three.js, montado dentro de um componente React. Cada página do portfólio tem um preset de cores diferente que transiciona suavemente na troca de rota. Foi a parte mais trabalhosa e a que mais gosto.

**Home page como Server Component**
A `page.tsx` raiz não tem `"use client"`. O conteúdo interativo (animações, Framer Motion) foi isolado em `HomeClient.tsx`, que é importado pela page. Isso garante que o HTML inicial chegue do servidor com todo o conteúdo — melhor para SEO e para o LCP.

**Sitemap dinâmico via GitHub API**
O `lastModified` de cada projeto no `sitemap.xml` não é uma data hardcoded — é buscado em build time direto da GitHub API, filtrando commits pela pasta do projeto (`?path=app/meudim`). O Next.js cacheia a resposta por 24h via `next: { revalidate: 86400 }`.

**Fonte de ícones sem bloquear o render**
Em vez de um `<link rel="stylesheet">` bloqueante para o Material Symbols, uso o padrão `media="print"` + `onLoad="this.media='all'"` com um `<link rel="preload">` na frente. Os ícones carregam em paralelo sem atrasar o First Contentful Paint.

---

## Projetos

**[Portal do Cidadão – Estância Velha](https://evandrometz.com.br/portal-cidadao-estancia-velha)** `2025`
Plataforma web e mobile para registro de ocorrências urbanas com geolocalização, upload de imagens e envio direto à Prefeitura. Next.js, Firebase e Google Maps API.
→ [Ver projeto](https://portal-cidadao-estancia-velha.vercel.app/) · [Repositório](https://github.com/metzevandro/portal-cidadao-estancia-velha)

**[MeuDim](https://evandrometz.com.br/meudim)** `2025`
Gestão financeira pessoal com categorização de despesas e receitas, múltiplas formas de pagamento e dashboards visuais. Next.js e TypeScript.
→ [Ver projeto](https://financas-azure.vercel.app/)

**[Design System Zeroz](https://evandrometz.com.br/design-system-zeroz)** `2024`
Biblioteca de componentes React open source com TypeScript e SCSS, documentada no Storybook e publicada no npm. Design tokens conectados ao Figma.
→ [Ver projeto](https://zeroz.vercel.app/) · [Repositório](https://github.com/metzevandro/Zeroz) · [npm](https://www.npmjs.com/package/zeroz)

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Contato

Evandro Metz · [evandro.metz@outlook.com](mailto:evandro.metz@outlook.com) · [LinkedIn](https://linkedin.com/in/metzevandro)