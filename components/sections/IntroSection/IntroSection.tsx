import dynamic from "next/dynamic";
import "./IntroSection.scss";
import { Icon } from "@/components/ui/icon/Icon";

const AnimatedLiquidBackground = dynamic(
  () =>
    import("@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground"),
  { ssr: false },
);

export function IntroSection() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-section__container">
        <div className="intro-section__content">
          <div className="intro-section__image-wrapper">
            <img
              className="intro-section__image"
              src="/evandro.png"
              alt="Evandro Metz"
            />
          </div>

          <div className="intro-section__info">
            <h4>
              Desenvolvedor de Software na <strong>CIGAM</strong>
            </h4>

            <h1>Evandro Metz</h1>

            <p className="intro-section__description">
              Comprometido em transformar interfaces abstratas em projetos
              concretos e sólidos para o usuário, unindo design cuidadoso com
              engenharia robusta.
            </p>
          </div>

          <div className="intro-section__scroll">
            <Icon name="keyboard_double_arrow_down" />
            <a href="#projects">Role a tela para ver projetos</a>
            <Icon name="keyboard_double_arrow_down" />
          </div>
        </div>
      </div>
    </section>
  );
}
