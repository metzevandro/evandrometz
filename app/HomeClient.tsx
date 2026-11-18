"use client";

import { IntroSection } from "@/components/sections/IntroSection/IntroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { Footer } from "@/components/layout/footer/footer";
import { CurriculumSection } from "@/components/sections/CurriculumSection/CurriculumSection";
import LetsTalkSection from "@/components/sections/LetsTalkSection/LetsTalkSection";
import "./globals.scss";

export default function HomeClient() {
  return (
    <main>
      <IntroSection />

      <div className="blur-container">
        <ProjectsSection />
        <AboutSection />
        <CurriculumSection />
        <LetsTalkSection />
        <Footer />
      </div>
    </main>
  );
}
