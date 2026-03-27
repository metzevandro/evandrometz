"use client";

import Image from "next/image";
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
  const [isClosing, setIsClosing] = useState(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    const initialWidth = rect.width;
    const initialHeight = rect.height;
    
    // Calcular a escala inicial baseado no tamanho final esperado
    const finalWidth = window.innerWidth - 80; // viewport width menos padding
    const scale = initialWidth / finalWidth;

    setModalStyle({
      "--start-x": `${startX}px`,
      "--start-y": `${startY}px`,
      "--initial-width": `${initialWidth}px`,
      "--initial-height": `${initialHeight}px`,
      "--scale": scale,
    } as React.CSSProperties);
    setIsClosing(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
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

      {isOpen && (
        <>
          <div
            className={`clickable-image__overlay ${
              isClosing ? "clickable-image__overlay--closing" : "clickable-image__overlay--active"
            }`}
            onClick={handleClose}
          />

          <button
            className={`clickable-image__close ${
              isClosing ? "clickable-image__close--closing" : "clickable-image__close--active"
            }`}
            onClick={handleClose}
            aria-label="Fechar imagem"
          >
            ✕
          </button>

          <div
            className={`clickable-image__modal ${
              isClosing ? "clickable-image__modal--closing" : "clickable-image__modal--active"
            }`}
            style={modalStyle}
          >
            <Image
              className="img"
              src={src}
              alt={alt}
              width={3000}
              height={3000}
              priority
            />
          </div>
        </>
      )}
    </>
  );
}
