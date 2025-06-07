"use client";
import { useEffect, useState, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import "./loader.scss";

const AnimatedText = memo(function AnimatedText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      containerRef.current.style.visibility = "visible";
      const { words } = splitText(containerRef.current.querySelector("h1")!);
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        },
      );
    });
  }, []);

  return (
    <>
      <div
        className="animated-text-container"
        ref={containerRef}
        style={{ visibility: "hidden" }}
      >
        <h1 className="loader-title">Evandro Metz</h1>
        <style>{`
          .animated-text-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            text-align: left;
            position: relative;
            background: transparent;
          }
          .loader-title {
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 0.1em;
            margin: 0;
            color: var(--s-color-content-default);
          }
          .split-word {
            will-change: transform, opacity;
          }
          .loader-white-line {
            width: 100vw;
            height: 5vh;
            background: var(--s-color-content-default);
            position: absolute;
            left: 0;
            bottom: -15vh;
            z-index: 2;
          }
          .loader-gray-line {
            width: 100vw;
            height: 10vh;
            background: gray;
            position: absolute;
            left: 0;
            bottom: -10vh;
            z-index: 1;
          }
        `}</style>
        <div className="loader-gray-line" />
        <div className="loader-white-line" />
      </div>
    </>
  );
});

export default function Loader() {
  const currentYear = new Date().getFullYear();
  const [count, setCount] = useState(2022);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!showLoader) return;
    if (count < currentYear) {
      const timer = setTimeout(() => setCount(count + 1), 500);
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => setShowLoader(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [count, showLoader, currentYear]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-115%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="loader-overlay"
        >
          <div className="loader-center-content">
            <AnimatedText />
          </div>
          <span className="loader-text">{count}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
