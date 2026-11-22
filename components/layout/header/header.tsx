"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedLink } from "@/components/ui/animatedLink/AnimatedLink";
import "./header.scss";

const LINKS = [
  { hash: "#", id: "intro", label: "Início" },
  { hash: "#projects", id: "projects", label: "Projetos" },
  { hash: "#about", id: "about", label: "Sobre mim" },
  { hash: "#curriculum", id: "curriculum", label: "Currículo" },
  { hash: "#letstalk", id: "letstalk", label: "Contato" },
];

const SOCIAL = [
  { href: "https://github.com/metzevandro", label: "GitHub" },
  { href: "https://www.linkedin.com/in/metzevandro/", label: "LinkedIn" },
  { href: "https://www.instagram.com/evandro.metz/", label: "Instagram" },
];

const EASE = [0.76, 0, 0.24, 1] as const;
const BAR_OFFSET = 34;

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const IDS = LINKS.map((l) => l.id);

export function Header() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: BAR_OFFSET, r: 1200 });
  const active = useActiveSection(IDS);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > last + 6 && y > 140) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => {
    if (!open) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = w - BAR_OFFSET;
      setOrigin({ x, y: BAR_OFFSET, r: Math.hypot(x, h) + 40 });
    }
    setOpen((v) => !v);
  };

  const navigateTo = (hash: string) => {
    setOpen(false);
    router.push(`/${hash}`);
  };

  const circle = (r: number) => `circle(${r}px at ${origin.x}px ${origin.y}px)`;
  const dur = reduce ? 0 : 0.6;

  return (
    <header className="site-header">
      {/* Desktop */}
      <nav className="site-header__nav" aria-label="Principal">
        {LINKS.map(({ hash, label }) => (
          <AnimatedLink key={hash} href={hash} onClick={() => navigateTo(hash)}>
            {label}
          </AnimatedLink>
        ))}
      </nav>

      {mounted &&
        createPortal(
          <>
            <div
              className={[
                "mobile-bar",
                scrolled && !open ? "is-scrolled" : "",
                hidden && !open ? "is-hidden" : "",
                open ? "is-open" : "",
              ].join(" ")}
            >
              <a
                className="mobile-bar__brand"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("#");
                }}
                tabIndex={scrolled ? 0 : -1}
              >
                Evandro Metz
              </a>

              <button
                type="button"
                className="mobile-bar__toggle"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={toggle}
              >
                <span />
                <span />
              </button>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  className="mobile-menu"
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Menu"
                  initial={{ clipPath: circle(0) }}
                  animate={{ clipPath: circle(origin.r) }}
                  exit={{ clipPath: circle(0) }}
                  transition={{ duration: dur, ease: EASE }}
                >
                  <motion.nav
                    className="mobile-menu__nav"
                    aria-label="Principal"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: {
                        transition: { staggerChildren: 0, duration: 0 },
                      },
                      show: {
                        transition: {
                          delayChildren: reduce ? 0 : 0.25,
                          staggerChildren: reduce ? 0 : 0.06,
                        },
                      },
                    }}
                  >
                    {LINKS.map(({ hash, id, label }) => (
                      <motion.a
                        key={hash}
                        href={hash}
                        className={active === id ? "is-active" : ""}
                        aria-current={active === id ? "location" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(hash);
                        }}
                        variants={{
                          hidden: { opacity: 0, y: reduce ? 0 : 28 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: reduce ? 0 : 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                      >
                        {label}
                      </motion.a>
                    ))}
                  </motion.nav>

                  <motion.div
                    className="mobile-menu__footer"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: reduce ? 0 : 0.55 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  >
                    <a href="mailto:evandro.metz@outlook.com">
                      evandro.metz@outlook.com
                    </a>
                    <div>
                      {SOCIAL.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>,
          document.body,
        )}
    </header>
  );
}
