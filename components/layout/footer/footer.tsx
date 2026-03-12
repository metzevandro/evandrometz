import { Icon } from "@/components/ui/icon/Icon";
import { AnimatedLink } from "@/components/ui/animatedLink/animatedLink";
import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__sitemap">
          <h1>Sitemap</h1>

          <AnimatedLink href="/#">Início</AnimatedLink>
          <AnimatedLink href="/#projects">Projetos</AnimatedLink>
          <AnimatedLink href="/#about">Sobre mim</AnimatedLink>
          <AnimatedLink href="/#curriculum">Currículo</AnimatedLink>
        </div>

        <div className="footer__social">
          <h1>Redes</h1>

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
          <h1>Contato</h1>

          <AnimatedLink href="mailto:evandro.metz@outlook.com">
            evandro.metz@outlook.com
          </AnimatedLink>
        </div>

        <a className="footer__back-to-top" href="/#">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon name="arrow_upward" />
          </div>
          <p>Voltar ao topo</p>
        </a>
      </div>
    </footer>
  );
}
