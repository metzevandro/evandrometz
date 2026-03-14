"use client";
import dynamic from "next/dynamic";

const AnimatedLiquidBackground = dynamic(
  () =>
    import("../../components/ui/animatedLiquidBackground/AnimatedLiquidBackground"),
  { ssr: false },
);

export default function PortalCidadaoEstanciaVelha() {
  return (
    <>
      <div className="animated-background">
        <AnimatedLiquidBackground
          preset="PortalCidadaoEstanciaVelha"
          speed={20}
        />
      </div>
    </>
  );
}
