import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageGallery.scss";
import { ButtonIcon } from "design-system-zeroz";

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

interface ImageGalleryProps {
  images: ImageData[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [popupImg, setPopupImg] = useState<string | null>(null);
  const [imgSizes, setImgSizes] = useState<{
    [key: string]: { width: number; height: number };
  }>({});
  const imgRefs = useRef<{ [key: string]: HTMLImageElement | null }>({});

  const closePopup = () => setPopupImg(null);

  const handleImgClick = (img: string) => {
    const ref = imgRefs.current[img];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setImgSizes((prev) => ({
        ...prev,
        [img]: { width: rect.width, height: rect.height },
      }));
    }
    setPopupImg(img);
  };

  return (
    <div className="image-gallery">
      {images.map((image) =>
        popupImg === image.src ? (
          <div
            key={image.src}
            className="img"
            style={{
              borderRadius: "10px",
              background: "var(--s-color-background-default)",
              display: "inline-block",
              width: imgSizes[image.src]?.width,
              height: imgSizes[image.src]?.height,
            }}
          />
        ) : (
          <motion.img
            key={image.src}
            ref={(el) => {
              imgRefs.current[image.src] = el;
            }}
            src={image.src}
            alt={image.alt}
            className="img"
            layoutId={`popup-img-${image.src.replace(/\W/g, "")}`}
            onClick={() => handleImgClick(image.src)}
            style={{
              borderRadius: "10px",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            whileHover={{
              width: "180%",
              transition: { duration: 0.5 },
            }}
          />
        ),
      )}
      <AnimatePresence>
        {popupImg && (
          <motion.div
            className="image-popup-overlay"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              stiffness: 60,
              damping: 20,
              mass: 0.6,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "var(--s-color-background-overlay)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              flexDirection: "column",
              cursor: "zoom-out",
            }}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                display: "flex",
                alignItems: "flex-end",
                cursor: "default",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ButtonIcon
                aria-label="Fechar"
                size="md"
                variant="on-color"
                buttonType="plain"
                typeIcon="close"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  zIndex: 1100,
                }}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  closePopup();
                }}
              />
              <motion.img
                src={popupImg}
                alt="Popup"
                layoutId={`popup-img-${popupImg.replace(/\W/g, "")}`}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  borderRadius: "10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  background: "#fff",
                  display: "block",
                }}
                transition={{
                  stiffness: 80,
                  damping: 18,
                  mass: 0.7,
                }}
              />
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "20%", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  background: "var(--s-color-background-overlay)",
                  color: "#fff",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  display: "flex",
                  padding: "1rem",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                  overflow: "hidden",
                }}
              >
                <p style={{ width: "100%", textAlign: "left" }}>
                  {images.find((img) => img.src === popupImg)?.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
