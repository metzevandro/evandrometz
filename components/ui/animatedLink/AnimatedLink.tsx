import { motion, HTMLMotionProps } from "framer-motion";

type AnimatedLinkProps = HTMLMotionProps<"a"> & {
  children: React.ReactNode;
  inheritHover?: boolean;
};

export function AnimatedLink({
  children,
  inheritHover = false,
  ...props
}: AnimatedLinkProps) {
  return (
    <motion.a
      {...props}
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
