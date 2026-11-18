# evandrometz.com.br

Meu portfólio pessoal. Construído com Next.js, animações em WebGL e uma obsessão por detalhe que provavelmente não era necessária — mas valeu a pena.

🔗 **[evandrometz.com.br](https://evandrometz.com.br)**

---

## Por que construir do zero?

Templates existem. Framer existe. Mesmo assim optei por construir tudo à mão — porque portfólio é o único projeto onde você tem liberdade total, e eu queria usar essa liberdade pra mostrar como eu penso código, não só o que eu já fiz.

---

## Stack

|           |                                              |
| --------- | -------------------------------------------- |
| Framework | Next.js 16 (App Router)                      |
| Linguagem | TypeScript                                   |
| Estilo    | SCSS Modules                                 |
| Animações | Framer Motion + WebGL (shaders customizados) |
| Ícones    | Material Symbols                             |
| E-mail    | Resend                                       |
| Proteção  | Upstash Redis (rate limit)                   |
| Deploy    | Vercel                                       |

---

## Decisões técnicas

**Animação de fundo em WebGL**
O background líquido animado não é CSS nem SVG — é um fragment shader rodando em WebGL puro (sem Three.js), montado dentro de um componente React. Cada página do portfólio tem um preset de cores diferente que transiciona suavemente na troca de rota. Foi a parte mais trabalhosa e a que mais gosto.

**Home page como Server Component**
A `page.tsx` raiz não tem `"use client"`. O conteúdo interativo (animações, Framer Motion) foi isolado em `HomeClient.tsx`, que é importado pela page. Isso garante que o HTML inicial chegue do servidor com todo o conteúdo — melhor para SEO e para o LCP.

**Formulário de contato protegido**
Qualquer pessoa pode me enviar uma mensagem pelo site (seção "Vamos conversar?"). O envio passa por `POST /api/contact`, que usa o [Resend](https://resend.com) e foi desenhado para não virar um endpoint aberto para spam ou para consumir a cota da API. Veja a seção [Contato e segurança](#contato-e-segurança).

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

## Contato e segurança

A rota `app/api/contact/route.ts` aplica as camadas abaixo, nesta ordem, antes de gastar qualquer chamada ao Resend:

| Camada | O que faz | Onde |
| --- | --- | --- |
| Verificação de origem | Só aceita requisições cujo `Origin` seja o próprio site | `lib/security/request.ts` |
| Tipo e tamanho | Exige `application/json` e limita o corpo a 10 KB | `route.ts` |
| Rate limit por IP | 5 requisições / 10 min (janela deslizante) | `lib/security/rate-limit.ts` |
| Teto global diário | 40 envios / dia, caso o ataque venha de muitos IPs | `lib/security/rate-limit.ts` |
| Honeypot | Campo invisível; se preenchido, responde "sucesso" sem enviar nada | `ContactForm.tsx` + `route.ts` |
| Tempo mínimo | Rejeita envios feitos em menos de 2,5 s após abrir o formulário | `route.ts` |
| CAPTCHA (opcional) | Cloudflare Turnstile validado no servidor | `lib/security/turnstile.ts` |
| Validação e sanitização | Limites de tamanho, e-mail válido, remoção de caracteres de controle (evita *header injection*) | `lib/security/contact-schema.ts` |
| Saída segura | Template de e-mail em React (escapa HTML); erros do provedor nunca vão para o cliente | `components/mail/ContactEmail.tsx` |

Outros pontos: o e-mail chega para mim com `Reply-To` do visitante, então respondo direto. Não há resposta automática ao visitante, de propósito, para ninguém usar o formulário para disparar e-mails para terceiros. Há também headers de segurança (`next.config.js`) e `/api/` bloqueado no `robots.txt`.

### Variáveis de ambiente

Copie `.env.example` para `.env.local` (local) e cadastre as mesmas variáveis na Vercel (**Settings → Environment Variables**).

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `RESEND_API_KEY` | Sim | Chave da API do Resend |
| `CONTACT_FROM_EMAIL` | Recomendada | Remetente num domínio verificado no Resend. Sem ela, usa `onboarding@resend.dev`, que só entrega para o e-mail dono da conta |
| `CONTACT_TO_EMAIL` | Não | Destino das mensagens (padrão: `evandro.metz@outlook.com`) |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | **Em produção** | Rate limit compartilhado entre as instâncias serverless. Sem elas, cai num limite em memória, que na Vercel **não é confiável** |
---

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha RESEND_API_KEY
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Contato

Evandro Metz · [evandro.metz@outlook.com](mailto:evandro.metz@outlook.com) · [LinkedIn](https://linkedin.com/in/metzevandro)
