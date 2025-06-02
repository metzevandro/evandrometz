import { useState } from "react";
import { motion } from "framer-motion";

import "./NavItem.scss";

export function NavItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const isActive = active || hovered;

  const handleClick = () => {
    const el = document.getElementById(label.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="nav-item-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginBottom: 8,
      }}
    >
      <motion.div
        layout
        initial={{ width: 4 }}
        animate={{ width: isActive ? 32 : 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          height: 32,
          background: isActive
            ? "var(--s-color-content-default)"
            : "var(--s-color-content-light)",
          borderRadius: 4,
          marginRight: 12,
        }}
      />
      <motion.a
        style={{
          fontWeight: 600,
          fontSize: 16,
          color: "var(--s-color-content-default)",
          position: "relative",
          left: 0,
          cursor: "pointer",
        }}
        animate={{
          x: isActive ? 12 : 0,
          color: isActive
            ? "var(--s-color-content-default)"
            : "var(--s-color-content-light)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        tabIndex={0}
      >
        {label}
      </motion.a>
    </div>
  );
}
