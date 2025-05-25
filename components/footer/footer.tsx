import { Icon } from "design-system-zeroz";
import "./footer.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function NavLinkExternal({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="footer-nav-link"
      type="button"
      onClick={() => openExternal(url)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "none",
        border: "none",
        padding: 0,
      }}
    >
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          bottom: -2,
          height: 3,
          width: "100%",
          background: "var(--s-color-content-default)",
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />
    </button>
  );
}

function NavLinkAnchor({
  anchorId,
  children,
}: {
  anchorId: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (anchorId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToId(anchorId);
    }
  };

  return (
    <button
      className="footer-nav-link"
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "none",
        border: "none",
        padding: 0,
      }}
    >
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          bottom: -2,
          height: 3,
          width: "100%",
          background: "var(--s-color-content-default)",
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />
    </button>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          <div className="footer-section-title">
            <h1 >Redes</h1>
          </div>
          <li className="footer-item">
            <NavLinkExternal url="https://www.linkedin.com/in/metzevandro/">
              Linkedin
            </NavLinkExternal>
          </li>
          <li className="footer-item">
            <NavLinkExternal url="https://github.com/metzevandro">
              Github
            </NavLinkExternal>
          </li>
        </ul>
        <ul className="footer-list">
          <div className="footer-section-title footer-section-title--right">
            <h1>Contato</h1>
          </div>
          <li className="footer-item">
            <NavLinkExternal url="mailto:evandro.metz@outlook.com">
              evandro.metz@outlook.com
            </NavLinkExternal>
          </li>
          <li className="footer-item footer-item--voltar">
            <NavLinkAnchor anchorId="top">
              <div>Voltar</div>
              <Icon size="md" icon="arrow_upward"></Icon>
            </NavLinkAnchor>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
