import { Icon } from "@/components/ui/icon/Icon";
import { AnimatedLink } from "@/components/ui/animatedLink/animatedLink";
import "./footer.scss";
import { motion, Variants } from "framer-motion";

export function Footer() {
  const arrowVariants: Variants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: [0, -20, 10, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.6,
        ease: "linear",
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__sitemap">
          <h5>Sitemap</h5>

          <AnimatedLink href="/#">Início</AnimatedLink>
          <AnimatedLink href="/#projects">Projetos</AnimatedLink>
          <AnimatedLink href="/#about">Sobre mim</AnimatedLink>
          <AnimatedLink href="/#curriculum">Currículo</AnimatedLink>
        </div>

        <div className="footer__social">
          <h5>Redes</h5>

          <AnimatedLink
            href="https://github.com/metzevandro"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </AnimatedLink>

          <AnimatedLink
            href="https://www.linkedin.com/in/metzevandro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </AnimatedLink>
          <AnimatedLink
            href="https://www.instagram.com/evandro.metz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </AnimatedLink>
        </div>
      </div>

      <div className="footer__right">
        <div className="footer__contact">
          <h5>Contato</h5>

          <AnimatedLink href="mailto:evandro.metz@outlook.com">
            evandro.metz@outlook.com
          </AnimatedLink>
        </div>

        <motion.div
          className="footer__back-to-top"
          initial="initial"
          whileHover="hover"
        >
          <motion.a variants={arrowVariants} href="/#">
            Voltar para o topo
          </motion.a>

          <motion.div
            style={{ display: "flex", alignItems: "center" }}
            variants={arrowVariants}
          >
            <Icon name="keyboard_double_arrow_up" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
