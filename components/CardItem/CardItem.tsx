import React, { useState, useRef, useEffect } from "react";
import "./CardItem.scss";
import { Badge } from "design-system-zeroz";
import { motion } from "framer-motion";

export interface CardItemProps {
  companyName: string;
  period: { start: string; end: string };
  title: string;
  description: string;
  badges: { label: string }[];
  urlCompany: string;
  color: string;
}

const colorMap: Record<string, string> = {
  ff7811: "rgba(255,120,17,0.4)",
  E10000: "rgba(225,0,0,0.4)",
};

export function CardItem({
  color,
  urlCompany,
  companyName,
  period,
  title,
  description,
  badges = [],
}: CardItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const colorClass = color.replace("#", "");
  const borderColor = colorMap[colorClass] || "#ff7811";

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [isHovered]);

  const handleClick = () => {
    if (urlCompany) {
      window.open(urlCompany, "_blank");
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`card-item ${colorClass}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          borderRadius: 10,
          zIndex: 2,
        }}
      >
        <motion.rect
          x="1"
          y="1"
          width={Math.max(dimensions.width - 2, 0)}
          height={Math.max(dimensions.height - 2, 0)}
          rx="10"
          ry="10"
          fill="none"
          stroke={borderColor}
          strokeWidth="1"
          strokeDasharray={
            2 *
            (Math.max(dimensions.width - 2, 0) +
              Math.max(dimensions.height - 2, 0))
          }
          animate={{
            strokeDashoffset: isHovered
              ? 0
              : 2 *
                (Math.max(dimensions.width - 2, 0) +
                  Math.max(dimensions.height - 2, 0)),
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      <small className="card-item__period">
        {period.start} - {period.end}
      </small>
      <div className="card-item__content">
        <div className="card-item__header">
          <h4 className="card-item__company">{companyName}</h4>
        </div>
        <h3 className="card-item__title">{title}</h3>
        <p className="card-item__description">{description}</p>
        <div className="card-item__badges">
          {badges.map((badge, idx) => (
            <Badge
              key={badge.label + idx}
              label={badge.label}
              type="light"
              variant="default"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
