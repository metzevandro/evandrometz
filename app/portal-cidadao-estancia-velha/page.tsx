"use client";
import dynamic from "next/dynamic";
import "./styles.scss";
import Header from "@/components/layout/header/header";
import { AnimatedLink } from "@/components/ui/animatedLink/animatedLink";
import Image from "next/image";
import { Footer } from "@/components/layout/footer/footer";

const AnimatedLiquidBackground = dynamic(
  () =>
    import(
      "../../components/ui/animatedLiquidBackground/AnimatedLiquidBackground"
    ),
  { ssr: false },
);

interface LinhaProps {
  nome: string;
  cargo: string;
  link?: string;
}

function Linha({ nome, cargo, link }: LinhaProps) {
  return (
    <div className="linha">
      <span>{nome}</span>
      {link ? (
        <AnimatedLink href={link} target="_blank">
          {cargo}
        </AnimatedLink>
      ) : (
        <span>{cargo}</span>
      )}
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  width = 1200,
  height = 800,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="image">
      <Image alt={alt} src={src} className="img" width={width} height={height} />
    </div>
  );
}

export default function PortalCidadaoEstanciaVelha() {
  const mobileImages = [
    { src: "/portal-cidadao/mobile3.webp", alt: "Versão mobile 1" },
    { src: "/portal-cidadao/mobile2.webp", alt: "Versão mobile 2" },
    { src: "/portal-cidadao/mobile1.webp", alt: "Versão mobile 3" },
  ];

  return (
    <main>
      <div className="animated-background">
        <AnimatedLiquidBackground
          preset="PortalCidadaoEstanciaVelha"
          speed={20}
        />
      </div>
      <div className="blur">
        <Header />
        <div className="container">
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
            <ProjectImage
              src="/portal-cidadao/homepage.webp"
              alt="Versão mobile do Portal do Cidadão"
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
              <ProjectImage
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
              <ProjectImage
                src="/portal-cidadao/mapa.webp"
                alt="Mapa de ocorrências"
              />
              <ProjectImage
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
                    <Image
                      alt={alt}
                      src={src}
                      className="img"
                      width={250}
                      height={800}
                    />
                  </div>
                ))}
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
