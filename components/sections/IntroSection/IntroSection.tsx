import "./IntroSection.scss";
import { Icon } from "@/components/ui/icon/Icon";
import { AnimatedLink } from "@/components/ui/animatedLink/animatedLink";
import { motion, Variants } from "framer-motion";

const arrowVariants: Variants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  hover: {
    y: [0, 20, -10, 0],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

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
              Desenvolvedor de Software na{" "}
              <AnimatedLink
                href="https://www.cigam.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CIGAM
              </AnimatedLink>
            </h4>

            <h1>Evandro Metz</h1>

            <p className="intro-section__description">
              Comprometido em transformar interfaces abstratas em projetos
              concretos e sólidos para o usuário, unindo design cuidadoso com
              engenharia robusta.
            </p>
          </div>

          <div className="intro-section__scroll">
            <motion.div
              className="intro-section__arrow"
              initial="initial"
              whileHover="hover"
            >
              <motion.div style={{display: 'flex', alignItems: 'center'}} variants={arrowVariants}>
                <Icon name="keyboard_double_arrow_down" />
              </motion.div>

              <motion.a
                href="#projects"
                className="intro-section__scroll-text"
                variants={arrowVariants}
              >
                Role a tela para ver projetos
              </motion.a>

              <motion.div style={{display: 'flex', alignItems: 'center'}} variants={arrowVariants}>
                <Icon name="keyboard_double_arrow_down" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}