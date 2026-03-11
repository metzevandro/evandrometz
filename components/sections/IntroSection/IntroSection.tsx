import "./IntroSection.scss";
import { Icon } from "@/components/ui/icon/Icon";
import { AnimatedLink } from "@/components/ui/animatedLink/animatedLink";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const arrowVariants: Variants = {
  animate: {
    y: [5, -5, 5],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export function IntroSection() {
  const ref = useRef<HTMLImageElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateValueX = ((y - centerY) / centerY) * -15;
    const rotateValueY = ((x - centerX) / centerX) * 15;

    rotateX.set(rotateValueX);
    rotateY.set(rotateValueY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section id="intro" className="intro-section">
      <div className="intro-section__container">
        <div className="intro-section__content">
          <div className="intro-section__image-wrapper">
            <motion.img
              ref={ref}
              className="intro-section__image"
              src="/evandro.png"
              alt="Evandro Metz"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: smoothX,
                rotateY: smoothY,
                transformPerspective: 800,
              }}
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
            <motion.a className="intro-section__arrow" href="#projects">
              <motion.div
                style={{ display: "flex", alignItems: "center" }}
                variants={arrowVariants}
                animate="animate"
              >
                <Icon name="keyboard_double_arrow_down" />
              </motion.div>

              <p className="intro-section__scroll-text">
                Role a tela para ver projetos
              </p>

              <motion.div
                style={{ display: "flex", alignItems: "center" }}
                variants={arrowVariants}
                animate="animate"
              >
                <Icon name="keyboard_double_arrow_down" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
