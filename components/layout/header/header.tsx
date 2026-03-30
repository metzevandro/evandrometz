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
      <AnimatedLink onClick={() => navigateTo("#")}>Início</AnimatedLink>

      <AnimatedLink onClick={() => navigateTo("#projects")}>
        Projetos
      </AnimatedLink>

      <AnimatedLink onClick={() => navigateTo("#about")}>
        Sobre mim
      </AnimatedLink>

      <AnimatedLink onClick={() => navigateTo("#curriculum")}>
        Currículo
      </AnimatedLink>
    </header>
  );
}
