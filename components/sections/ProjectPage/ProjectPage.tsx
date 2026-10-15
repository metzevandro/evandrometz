"use client";
import "./ProjectPage.scss";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { Linha } from "@/components/ui/linha/Linha";
import { ClickableImage } from "@/components/ui/clickableImage/ClickableImage";
import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";
import LetsTalkSection from "@/components/sections/LetsTalkSection/LetsTalkSection";
import type { ProjectImage, ProjectItem, ProjectPageData } from "@/types";

function Section({
  heading,
  children,
  images,
}: {
  heading: string;
  children?: ReactNode;
  images?: ProjectImage[];
}) {
  return (
    <section className="project-page__section">
      <h2 className="project-page__heading">{heading}</h2>
      {children}
      {images && images.length > 0 && (
        <div className="project-page__images">
          {images.map((image) => (
            <ClickableImage key={image.src} {...image} />
          ))}
        </div>
      )}
    </section>
  );
}

function ItemList({ items }: { items: ProjectItem[] }) {
  return (
    <ul className="project-page__items">
      {items.map(({ title, text }) => (
        <li key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export function ProjectPage({ project }: { project: ProjectPageData }) {
  const {
    name,
    year,
    accent,
    title,
    summary,
    facts,
    cover,
    about,
    features,
    stack,
    decisions,
    learnings,
    role,
    mobile,
  } = project;

  return (
    <main>
      <div
        className="project-page"
        style={{ "--accent": accent } as CSSProperties}
      >
        <div className="project-page__container">
          <aside className="project-page__aside">
            <div className="project-page__sticky">
              <AnimatedLink href="/#projects" className="project-page__back">
                ← Voltar
              </AnimatedLink>
              <div className="project-page__meta">
                <span>{name}</span>
                <span>•</span>
                <span>{year}</span>
              </div>
              <div className="project-page__intro">
                <h1>{title}</h1>
                <p>{summary}</p>
              </div>
              <div>
                {facts.map((fact) => (
                  <Linha key={fact.nome} {...fact} />
                ))}
              </div>
            </div>
          </aside>

          <div className="project-page__content">
            <ClickableImage {...cover} priority />

            <Section heading="Sobre o projeto">
              <p>{about}</p>
            </Section>

            <Section heading="O que ele faz" images={features.images}>
              <ItemList items={features.items} />
            </Section>

            <Section heading="Stack">
              <ul className="project-page__chips">
                {stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </Section>

            <Section heading="Decisões técnicas" images={decisions.images}>
              <ItemList items={decisions.items} />
            </Section>

            <Section
              heading="Desafios e aprendizados"
              images={learnings.images}
            >
              <p>{learnings.text}</p>
            </Section>

            <Section heading="Minha participação">
              <p>{role}</p>
            </Section>

            {mobile && mobile.length > 0 && (
              <section className="project-page__section">
                <h2 className="project-page__heading">Versão mobile</h2>
                <div className="project-page__mobile">
                  {mobile.map((image, index) => (
                    <ClickableImage
                      key={image.src}
                      {...image}
                      sizes="(max-width: 768px) 33vw, 180px"
                      delay={index * 0.12}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
        <LetsTalkSection />
        <Footer />
      </div>
    </main>
  );
}
