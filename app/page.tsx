"use client";

import { IntroSection } from "@/components/sections/IntroSection/IntroSection";
import "./globals.scss";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { Footer } from "@/components/layout/footer/footer";
import { CurriculumSection } from "@/components/sections/CurriculumSection/CurriculumSection";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";

export default function Home() {
  return (
    <main>
      <IntroSection />

      <div className="blur-container">
        <ProjectsSection />
        <AboutSection />
        <CurriculumSection />
        <Footer />
      </div>
    </main>
  );
}
