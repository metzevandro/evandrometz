"use client";
import dynamic from "next/dynamic";

const AnimatedLiquidBackground = dynamic(
  () =>
    import("../../components/ui/animatedLiquidBackground/AnimatedLiquidBackground"),
  { ssr: false },
);

export default function MeuDim() {
  return (
    <>
      <div className="animated-background">
        <AnimatedLiquidBackground preset="MeuDim" speed={20} />
      </div>
    </>
  );
}
