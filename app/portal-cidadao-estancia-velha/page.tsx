"use client";
import "./styles.scss";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { Linha } from "@/components/ui/linha/Linha";
import { ClickableImage } from "@/components/ui/clickableImage/ClickableImage";
import LetsTalkSection from "@/components/sections/LetsTalkSection/LetsTalkSection";

export default function PortalCidadaoEstanciaVelha() {
  const mobileImages = [
    { src: "/portal-cidadao/mobile3.webp", alt: "Versão mobile 1" },
    { src: "/portal-cidadao/mobile2.webp", alt: "Versão mobile 2" },
    { src: "/portal-cidadao/mobile1.webp", alt: "Versão mobile 3" },
  ];

  return (
    <main>
      <div className="blur">
        <Header />
        <div className="container-principal">
          <div className="left">
            <div className="sticky">
              <div className="left__meta">
                <span>Portal do Cidadão de Estância Velha</span>
                <span>•</span>
                <span>2025</span>
              </div>
              <div className="left__intro">
                <h2>Facilitando o acesso aos serviços da Prefeitura</h2>
                <p>
                  Geolocalização, categorização e envio de imagem em um único
                  fluxo. Sua solicitação chega diretamente para os servidores da
                  Prefeitura de Estância Velha — sem ligação, sem fila, sem
                  burocracia.
                </p>
              </div>
              <div className="left__list">
                <Linha nome="Cargo" cargo="Desenvolvedor" />
                <Linha nome="Plataforma" cargo="Web • Mobile" />
                <Linha nome="Status" cargo="Concluído" />
                <Linha
                  nome="Repositório"
                  cargo="GitHub"
                  link="https://github.com/metzevandro/portal-cidadao-estancia-velha"
                />
                <Linha
                  nome="Produção"
                  cargo="portal-cidadao-estancia-velha"
                  link="https://portal-cidadao-estancia-velha.vercel.app/"
                />
              </div>
            </div>
          </div>

          <div className="right">
            <ClickableImage
              src="/portal-cidadao/homepage.webp"
              alt="Homepage do Portal do Cidadão"
              width={3000}
              height={3000}
            />

            <div>
              <span>Funcionalidades</span>
              <span className="description">
                Registro de ocorrências com pin no mapa, upload de imagens
                direto do celular, categorização de problemas urbanos
                (iluminação, pavimentação, limpeza, entre outros) e envio
                automático para os setores responsáveis da prefeitura — tudo em
                um único fluxo, sem necessidade de cadastro complexo.
              </span>
              <ClickableImage
                src="/portal-cidadao/funcionalidade.webp"
                alt="Tela de registro de ocorrência"
              />
            </div>

            <div>
              <span>Tecnologias</span>
              <span className="description">
                Next.js e React com TypeScript no frontend, Firebase como banco
                de dados e backend serverless, Firebase Auth para autenticação
                dos usuários, API do Google Maps para a camada de mapas e
                geolocalização, e deploy contínuo na Vercel.
              </span>
            </div>

            <div>
              <span>Desafios e aprendizados</span>
              <span className="description">
                O maior desafio técnico foi integrar a geolocalização ao mapa
                respeitando os limites geográficos reais de Estância Velha —
                algo que nunca havia feito antes. Foi preciso aprender a
                trabalhar com polígonos GeoJSON, validação de coordenadas dentro
                de um boundary e renderização com o Google Maps via API.
                Resolver isso foi um ponto de virada no projeto e abriu um novo
                campo de conhecimento em mapas interativos.
              </span>
              <ClickableImage
                src="/portal-cidadao/mapa.webp"
                alt="Mapa de ocorrências"
              />
              <ClickableImage
                src="/portal-cidadao/mapa2.webp"
                alt="Mapa de ocorrências 2"
              />
            </div>

            <div>
              <span>Minha participação</span>
              <span className="description">
                Fui responsável por todo o desenvolvimento: da arquitetura ao
                deploy. Isso incluiu modelagem do banco de dados, construção da
                API, interface web e mobile, integração com mapas e configuração
                do ambiente de produção na Vercel.
              </span>
            </div>

            <div className="mobile-grid">
              {mobileImages.map(({ src, alt }) => (
                <div key={src} className="mobile">
                  <ClickableImage
                    src={src}
                    alt={alt}
                    width={3000}
                    height={3000}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <LetsTalkSection />

        <Footer />
      </div>
    </main>
  );
}
