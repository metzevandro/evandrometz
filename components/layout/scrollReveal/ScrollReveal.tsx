"use client";

import { useEffect } from "react";

const SELECTOR = "main section, main footer, .card-project";
const ROOT_MARGIN = "0px 0px -12% 0px";
const STAGGER_S = 0.12;
const FALLBACK_MS = 1800;

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finish = (el: HTMLElement) => {
      el.dataset.reveal = "done";
      el.style.removeProperty("--reveal-delay");
    };

    const show = (el: HTMLElement) => {
      el.dataset.reveal = "shown";

      const onEnd = (event: TransitionEvent) => {
        if (event.target !== el || event.propertyName !== "transform") return;
        el.removeEventListener("transitionend", onEnd);
        finish(el);
      };
      el.addEventListener("transitionend", onEnd);
      window.setTimeout(() => {
        el.removeEventListener("transitionend", onEnd);
        finish(el);
      }, FALLBACK_MS);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          show(entry.target as HTMLElement);
        }
      },
      { rootMargin: ROOT_MARGIN },
    );

    const prepare = (el: HTMLElement) => {
      if (el.dataset.reveal) return;

      const rect = el.getBoundingClientRect();
      const isAboveFold = rect.top < window.innerHeight * 0.88;
      if (isAboveFold) {
        el.dataset.reveal = "done";
        return;
      }

      if (el.matches(".card-project") && el.parentElement) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.style.setProperty("--reveal-delay", `${index * STAGGER_S}s`);
      }

      el.dataset.reveal = "hidden";
      io.observe(el);
    };

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(SELECTOR)
        .forEach((el) => prepare(el));
    };

    scan();

    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
