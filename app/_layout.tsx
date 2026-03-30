"use client";
import AnimatedLiquidBackground from "@/components/ui/animatedLiquidBackground/AnimatedLiquidBackground";
import { AnimatedLiquidBackgroundPreset } from "@/types";
import { usePathname } from "next/navigation";

export default function Layout() {
  const pathname = usePathname();

  const presets: Record<string, AnimatedLiquidBackgroundPreset> = {
    "/": "Home",
    "/portal-cidadao-estancia-velha": "PortalCidadaoEstanciaVelha",
    "/meudim": "MeuDim",
    "/design-system-zeroz": "Zeroz",
  };

  const animation: AnimatedLiquidBackgroundPreset =
    presets[pathname] ?? "Default";

  return (
    <div className="animated-background">
      <AnimatedLiquidBackground preset={animation} speed={20} />
    </div>
  );
}
