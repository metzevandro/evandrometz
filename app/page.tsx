"use client";

import { IntroSection } from "@/components/sections/IntroSection/IntroSection";
import "./globals.scss";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { Footer } from "@/components/layout/footer/footer";
import { CurriculumSection } from "@/components/sections/CurriculumSection/CurriculumSection";
import dynamic from "next/dynamic";

const AnimatedLiquidBackground = dynamic(
  () => import("../components/ui/animatedLiquidBackground/AnimatedLiquidBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <div className="animated-background">
        <AnimatedLiquidBackground preset="Home" speed={20} />
      </div>

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