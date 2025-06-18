import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./UnderlineLink.scss";
import { Icon } from "design-system-zeroz";

interface UnderlineLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const UnderlineLink: React.FC<UnderlineLinkProps> = ({
  children,
  ...props
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      className="underline-link"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <span className="underline-link-inner">
        <h4 className="underline-link-content">{children}</h4>
        <Icon icon="arrow_outward" size="md" />
      </span>
      <span className="underline-link-underline-wrapper">
        <AnimatePresence>
          {hovered && (
            <motion.span
              className="underline-link-underline"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1, originX: 0 }}
              exit={{ scaleX: 0, originX: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </span>
    </a>
  );
};
