import { AnimatedLink } from "@/components/ui/animatedLink/animatedLink";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <AnimatedLink href="/#">Início</AnimatedLink>
      <AnimatedLink href="/#projects">Projetos</AnimatedLink>
      <AnimatedLink href="/#about">Sobre mim</AnimatedLink>
      <AnimatedLink href="/#curriculum">Currículo</AnimatedLink>
    </header>
  );
}
