"use client";

import { useRouter } from "next/navigation";
import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";
import "./header.scss";

export function Header() {
  const router = useRouter();

  const navigateTo = (hash: string) => {
    router.push(`/${hash}`);
  };

  return (
    <header>
      <AnimatedLink href="#" onClick={() => navigateTo("#")}>
        Início
      </AnimatedLink>

      <AnimatedLink href="#projects" onClick={() => navigateTo("#projects")}>
        Projetos
      </AnimatedLink>

      <AnimatedLink href="#about" onClick={() => navigateTo("#about")}>
        Sobre mim
      </AnimatedLink>

      <AnimatedLink
        href="#curriculum"
        onClick={() => navigateTo("#curriculum")}
      >
        Currículo
      </AnimatedLink>
    </header>
  );
}
