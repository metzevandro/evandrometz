"use client";
import "./styles.scss";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { Linha } from "@/components/ui/linha/Linha";
import { ClickableImage } from "@/components/ui/clickableImage/ClickableImage";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";
import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";

export default function DesignSystemZeroz() {
  return (
    <main>
      <div className="animated-background">
        <AnimatedLiquidBackground preset="Zeroz" speed={20} />
      </div>

      <div className="blur">
        <Header />
        <div className="container">
          <div className="left">
            <div className="sticky">
              <div className="left__meta">
                <span>Design System Zeroz</span>
                <span>•</span>
                <span>2024</span>
              </div>
              <div className="left__intro">
                <h2>Construindo um Design System escalável</h2>
                <p>
                  Biblioteca de componentes open source criada para padronizar e
                  acelerar o desenvolvimento de interfaces. Focada em
                  escalabilidade, consistência visual e acessibilidade —
                  conectando design e código do Figma ao produto final.
                </p>
              </div>
              <div className="left__list">
                <Linha nome="Cargo" cargo="Desenvolvedor" />
                <Linha nome="Plataforma" cargo="Web • Mobile • npm" />
                <Linha nome="Status" cargo="Em andamento" />
                <Linha
                  nome="Repositório"
                  cargo="GitHub"
                  link="https://github.com/metzevandro/Zeroz"
                />
                <Linha
                  nome="Documentação"
                  cargo="Storybook"
                  link="https://zeroz.vercel.app/"
                />
                <Linha
                  nome="Pacote"
                  cargo="npm"
                  link="https://www.npmjs.com/package/design-system-zeroz"
                />
              </div>
            </div>
          </div>

          <div className="right">
            <ClickableImage
              src="/design-system-zeroz/homepage.webp"
              alt="Visão geral do Design System Zeroz no Storybook"
              width={3000}
              height={3000}
            />
            <div>
              <span>Funcionalidades</span>
              <span className="description">
                Componentes reutilizáveis prontos para produção, documentados no
                Storybook e distribuídos via npm. O sistema garante consistência
                visual, reduz retrabalho e acelera a criação de interfaces,
                mantendo acessibilidade e responsividade como padrão.
              </span>
              <ClickableImage
                src="/design-system-zeroz/charts.webp"
                alt="Componentes e variantes no Storybook"
              />
            </div>
            <div>
              <span>Tecnologias</span>
              <span className="description">
                Desenvolvido com React e TypeScript, utilizando SCSS para
                estilização e Storybook para documentação interativa. A
                biblioteca é distribuída via npm, permitindo integração fácil em
                diferentes projetos.
              </span>
              <ClickableImage
                src="/design-system-zeroz/componente.webp"
                alt="Tokens de design e sistema de cores no Figma"
              />
            </div>
            <div>
              <span>Desafios e aprendizados</span>
              <span className="description">
                O principal desafio foi garantir que os componentes fossem
                realmente escaláveis, mantendo consistência visual,
                acessibilidade e responsividade. Isso exigiu ir além do visual,
                considerando semântica, contraste, navegação por teclado e
                padronização entre variantes.
              </span>
            </div>
            <div>
              <span>Participação</span>
              <span className="description">
                Fui esponsável por toda a engenharia do design system:
                desenvolvimento dos componentes em TypeScript e estruturação dos
                design tokens (cores, tipografia, espaçamentos e escalas),
                garantindo consistência e escalabilidade entre design e código.
                Também atuei na definição da arquitetura, configuração do
                Storybook, publicação no npm e documentação da biblioteca. O
                design visual foi criado no Figma pelo{" "}
                <AnimatedLink
                  target="_blank"
                  href="https://augustometz.com.br/"
                >
                  Augusto Metz
                </AnimatedLink>
                , designer do projeto.
              </span>
            </div>{" "}
            <ClickableImage
              src="/design-system-zeroz/props.webp"
              alt="Propriedades dos componentes documentadas no Storybook"
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
