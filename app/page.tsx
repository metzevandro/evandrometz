"use client";

import { IntroSection } from "@/components/sections/IntroSection/IntroSection";
import "./globals.scss";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";

export default function Home() {
  return (
    <main>
      <div className="animated-background">
        <AnimatedLiquidBackground preset="Mist" speed={20} />
      </div>
      <IntroSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
