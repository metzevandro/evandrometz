"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./ClickableImage.scss";

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ClickableImage({
  src,
  alt,
  width = 3000,
  height = 3000,
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSourceRect(rect);
    setIsOpen(true);
  };

  const getInitialPosition = () => {
    if (!sourceRect) {
      return {
        opacity: 0,
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
      };
    }

    return {
      opacity: 0,
      left: sourceRect.left + sourceRect.width / 2,
      top: sourceRect.top + sourceRect.height / 2,
      x: "-50%",
      y: "-50%",
    };
  };

  const getFinalPosition = () => {
    return {
      opacity: 1,
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      scale: 1,
    };
  };

  return (
    <>
      <div className="clickable-image" onClick={handleClick}>
        <Image
          alt={alt}
          src={src}
          className="clickable-image__img"
          width={width}
          height={height}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="clickable-image__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.button
              className="clickable-image__close"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              aria-label="Fechar imagem"
            >
              ✕
            </motion.button>

            <motion.div
              className="clickable-image__modal"
              initial={getInitialPosition()}
              animate={getFinalPosition()}
              exit={getInitialPosition()}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                className="img"
                src={src}
                alt={alt}
                width={3000}
                height={3000}
                priority
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
