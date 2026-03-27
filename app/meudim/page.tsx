"use client";
import "./styles.scss";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { Linha } from "@/components/ui/linha/Linha";
import { ClickableImage } from "@/components/ui/clickableImage/ClickableImage";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";

export default function MeuDim() {
  return (
    <main>
      <div className="animated-background">
        <AnimatedLiquidBackground preset="MeuDim" speed={20} />
      </div>

      <div className="blur">
        <Header />
        <div className="container">
          <div className="left">
            <div className="sticky">
              <div className="left__meta">
                <span>MeuDim</span>
                <span>•</span>
                <span>2025</span>
              </div>
              <div className="left__intro">
                <h2>Organizando as finanças de forma eficiente</h2>
                <p>
                  Plataforma completa de gestão financeira que simplifica o
                  controle de despesas e ganhos. Com categorização, análises
                  detalhadas e dashboards inteligentes, você tem visibilidade
                  total sobre suas finanças em um único lugar.
                </p>
              </div>
              <div className="left__list">
                <Linha nome="Cargo" cargo="Desenvolvedor" />
                <Linha nome="Plataforma" cargo="Web" />
                <Linha nome="Status" cargo="Em andamento" />
                <Linha nome="Produção" cargo="MeuDim.com" link="https://financas-azure.vercel.app/"/>
                <Linha nome="Repositório" cargo="GitHub" link="https://github.com/metzevandro/MeuDim"/>

              </div>
            </div>
          </div>

          <div className="right">
            <ClickableImage
              src="/meudim/dashboard.webp"
              alt="Visão geral do projeto MeuDim"
              width={3000}
              height={3000}
            />

            <div>
              <span>Sobre</span>
              <span className="description">
                MeuDim permite que usuários criem conta, registrem despesas e
                ganhos com categorização completa (categoria e subcategoria),
                forma de pagamento e fonte de renda. A plataforma oferece
                diversos gráficos e dashboards para acompanhamento detalhado
                das finanças, facilitando a tomada de decisões financeiras
                mais inteligentes.
              </span>
              <ClickableImage
              src="/meudim/earning.webp"
              alt="Visão geral do projeto MeuDim"
              width={3000}
              height={3000}
            />
            </div>

            <div>
              <span>Funcionalidades</span>
              <span className="description">
                Sistema completo com autenticação de usuários, registro de
                transações categorizadas, múltiplas formas de pagamento e
                origem de renda. Conversão de dados financeiros em tempo real
                e dashboards visuais com gráficos que facilitam a análise de
                padrões de gastos e receitas.
              </span>
              
            </div>

            <div>
              <span>Desafios e aprendizados</span>
              <span className="description">
                Os maiores desafios foram criar as rotas de requisições da API
                e implementar autenticação segura. Trabalhei com padrões que
                nunca havia explorado antes, resultando em aprendizados
                profundos sobre arquitetura backend, manipulação de dados
                financeiros e integração frontend-backend robusta.
              </span>
              <ClickableImage
                src="/meudim/login.webp"
                alt="Tela de Login"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
