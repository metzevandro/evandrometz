"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";

type AnimatedLinkProps = HTMLMotionProps<"a"> & {
  children: React.ReactNode;
  inheritHover?: boolean;
};

export function AnimatedLink({
  children,
  inheritHover = false,
  onClick,
  ...props
}: AnimatedLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const href = props.href;
    const isInternal =
      typeof href === "string" &&
      href.startsWith("/") &&
      !href.startsWith("//");
    const isModified =
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0;

    if (!isInternal || isModified || props.target === "_blank") return;

    event.preventDefault();
    router.push(href);
  };

  return (
    <motion.a
      {...props}
      onClick={handleClick}
      variants={{ rest: {}, hover: {} }}
      {...(!inheritHover && {
        initial: "rest",
        whileHover: "hover",
        animate: "rest",
      })}
      style={{
        position: "relative",
        display: "inline-block",
        textDecoration: "none",
        width: "fit-content",
        cursor: "pointer",
      }}
    >
      {children}

      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "100%",
          height: "2px",
          background: "currentColor",
          transformOrigin: "left",
        }}
      />
    </motion.a>
  );
}
