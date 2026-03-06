import { motion, HTMLMotionProps } from "framer-motion";

type AnimatedLinkProps = HTMLMotionProps<"a"> & {
  children: React.ReactNode;
};

export function AnimatedLink({ children, ...props }: AnimatedLinkProps) {
  return (
    <motion.a
      {...props}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        position: "relative",
        display: "inline-block",
        textDecoration: "none",
        width: "fit-content",
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
          scaleX: 0,
        }}
      />
    </motion.a>
  );
}