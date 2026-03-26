import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";
import "./header.scss";

export function Header() {
  return (
    <header>
      <AnimatedLink href="/#">Início</AnimatedLink>
      <AnimatedLink href="/#projects">Projetos</AnimatedLink>
      <AnimatedLink href="/#about">Sobre mim</AnimatedLink>
      <AnimatedLink href="/#curriculum">Currículo</AnimatedLink>
    </header>
  );
}
