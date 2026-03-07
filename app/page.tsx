"use client";

import { IntroSection } from "@/components/sections/IntroSection/IntroSection";
import "./globals.scss";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";
import { Footer } from "@/components/layout/footer/footer";
import { CurriculumSection } from "@/components/sections/CurriculumSection/CurriculumSection";

export default function Home() {
  return (
    <main>
      <div className="animated-background">
        <AnimatedLiquidBackground preset="Mist" speed={20} />
      </div>
      <IntroSection />
      <ProjectsSection />
      <AboutSection />
      <CurriculumSection />
      <Footer />
    </main>
  );
}
