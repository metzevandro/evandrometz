"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import "./ClickableImage.scss";

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  delay?: number;
}

const DEFAULT_SIZES = "(max-width: 768px) 100vw, 560px";

export function ClickableImage({
  src,
  alt,
  width = 1920,
  height = 1080,
  sizes = DEFAULT_SIZES,
  priority = false,
  delay = 0,
}: ClickableImageProps) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const ratio = width / height;
  const style = { "--ratio": ratio } as React.CSSProperties;

  const spring: Transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 260, damping: 32, mass: 0.9 };

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <>
      <motion.div
        className="clickable-image"
        style={style}
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={triggerRef}
          type="button"
          className="clickable-image__trigger"
          onClick={() => setIsOpen(true)}
          aria-label={`Ampliar imagem: ${alt}`}
          aria-haspopup="dialog"
        >
          {!isOpen && (
            <motion.span
              layoutId={id}
              className="clickable-image__frame"
              transition={spring}
            >
              <Image
                className="clickable-image__img"
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                priority={priority}
              />
            </motion.span>
          )}
          <span className="clickable-image__hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ampliar
          </span>
        </button>
      </motion.div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="clickable-image__lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
                onClick={close}
              >
                <button
                  ref={closeRef}
                  type="button"
                  className="clickable-image__close"
                  onClick={close}
                  aria-label="Fechar imagem"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <motion.span
                  layoutId={id}
                  className="clickable-image__frame clickable-image__frame--open"
                  style={style}
                  transition={spring}
                  onClick={(event) => event.stopPropagation()}
                >
                  <Image
                    className="clickable-image__img"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 100vw, 90vw"
                    quality={85}
                  />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
