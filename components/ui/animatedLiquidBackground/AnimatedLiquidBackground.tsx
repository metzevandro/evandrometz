"use client";

import { CSSProperties, useEffect, useRef, useMemo, ReactNode } from "react";
import {
  getShaderColorFromString,
  warpFragmentShader,
  PatternShapes,
  ShaderMount as ShaderMountVanilla,
} from "@/lib/framer/shader.js";
import { AnimatedLiquidBackgroundPreset } from "@/types";

const speedEase = (x: number): number => x * x * (3 - 2 * x);

interface PresetConfig {
  color1: string;
  color2: string;
  color3: string;
  rotation: number;
  proportion: number;
  scale: number;
  speed: number;
  distortion: number;
  swirl: number;
  swirlIterations: number;
  softness: number;
  offset: number;
  shape: string;
  shapeSize: number;
}

const templates: Record<AnimatedLiquidBackgroundPreset, PresetConfig> = {
  Home: {
    color1: "#050505",
    color2: "#34A7D4",
    color3: "#050505",
    rotation: 0,
    proportion: 33,
    scale: 0.48,
    speed: 39,
    distortion: 4,
    swirl: 65,
    swirlIterations: 5,
    softness: 100,
    offset: -235,
    shape: "Edge",
    shapeSize: 48,
  },
  Zeroz: {
    color1: "#050505",
    color2: "#9333ea",
    color3: "#050505",
    rotation: 0,
    proportion: 33,
    scale: 0.48,
    speed: 39,
    distortion: 4,
    swirl: 65,
    swirlIterations: 5,
    softness: 100,
    offset: -235,
    shape: "Edge",
    shapeSize: 48,
  },
  MeuDim: {
    color1: "#050505",
    color2: "#2160eb",
    color3: "#050505",
    rotation: 0,
    proportion: 33,
    scale: 0.48,
    speed: 39,
    distortion: 4,
    swirl: 65,
    swirlIterations: 5,
    softness: 100,
    offset: -235,
    shape: "Edge",
    shapeSize: 48,
  },
  PortalCidadaoEstanciaVelha: {
    color1: "#050505",
    color2: "#24b57f",
    color3: "#050505",
    rotation: 0,
    proportion: 33,
    scale: 0.48,
    speed: 39,
    distortion: 4,
    swirl: 65,
    swirlIterations: 5,
    softness: 100,
    offset: -235,
    shape: "Edge",
    shapeSize: 48,
  },
};

interface AnimatedLiquidBackgroundProps {
  preset?: AnimatedLiquidBackgroundPreset;
  speed?: number;
  radius?: string;
  style?: CSSProperties;
}

export default function AnimatedLiquidBackground({
  preset = "Home",
  speed = 25,
  radius = "0px",
  style = {},
}: AnimatedLiquidBackgroundProps) {
  const values = templates[preset] || templates.Home;
  const currentSpeed = speedEase(speed / 100) * 5;

  return (
    <div
      style={{
        borderRadius: radius,
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100dvh",
        ...style,
      }}
    >
      <Warp
        color1={values.color1}
        color2={values.color2}
        color3={values.color3}
        scale={values.scale}
        proportion={values.proportion / 100}
        distortion={values.distortion / 50}
        swirl={values.swirl / 100}
        swirlIterations={values.swirlIterations}
        rotation={(values.rotation * Math.PI) / 180}
        speed={currentSpeed}
        seed={values.offset * 10}
        shape={PatternShapes[values.shape as keyof typeof PatternShapes]}
        shapeScale={values.shapeSize / 100}
        softness={values.softness / 100}
        style={{ width: "100%", height: "100dvh" }}
      />
    </div>
  );
}

interface DefaultPreset {
  scale: number;
  rotation: number;
  color1: string | number[];
  color2: string | number[];
  color3: string | number[];
  proportion: number;
  softness: number;
  distortion: number;
  swirl: number;
  swirlIterations: number;
  shapeScale: number;
  shape: unknown;
}

const defaultPreset: DefaultPreset = {
  scale: 1,
  rotation: 0,
  color1: [0.05, 0.05, 0.05, 1],
  color2: [0.8, 0.8, 0.8, 1],
  color3: [1, 1, 1, 1],
  proportion: 0.35,
  softness: 1,
  distortion: 0.25,
  swirl: 0.8,
  swirlIterations: 10,
  shapeScale: 0.1,
  shape: PatternShapes.Checks,
};

interface WarpProps {
  color1?: string;
  color2?: string;
  color3?: string;
  scale?: number;
  proportion?: number;
  distortion?: number;
  swirl?: number;
  swirlIterations?: number;
  rotation?: number;
  speed?: number;
  seed?: number;
  shape?: unknown;
  shapeScale?: number;
  softness?: number;
  style?: CSSProperties;
}

const Warp = ({
  color1,
  color2,
  color3,
  scale,
  proportion,
  distortion,
  swirl,
  swirlIterations,
  rotation,
  speed,
  seed,
  shape,
  shapeScale,
  softness,
  style,
}: WarpProps) => {
  const uniforms = useMemo(() => {
    return {
      u_scale: scale ?? defaultPreset.scale,
      u_rotation: rotation ?? defaultPreset.rotation,
      u_color1: getShaderColorFromString(
        color1,
        defaultPreset.color1 as number[],
      ),
      u_color2: getShaderColorFromString(
        color2,
        defaultPreset.color2 as number[],
      ),
      u_color3: getShaderColorFromString(
        color3,
        defaultPreset.color3 as number[],
      ),
      u_proportion: proportion ?? defaultPreset.proportion,
      u_softness: softness ?? defaultPreset.softness,
      u_distortion: distortion ?? defaultPreset.distortion,
      u_swirl: swirl ?? defaultPreset.swirl,
      u_swirlIterations: swirlIterations ?? defaultPreset.swirlIterations,
      u_shapeScale: shapeScale ?? defaultPreset.shapeScale,
      u_shape: shape ?? defaultPreset.shape,
    };
  }, [
    color1,
    color2,
    color3,
    scale,
    proportion,
    distortion,
    swirl,
    swirlIterations,
    rotation,
    softness,
    shapeScale,
    shape,
  ]);

  return (
    <ShaderMount
      fragmentShader={warpFragmentShader}
      uniforms={uniforms}
      speed={speed}
      seed={seed}
      style={style}
    />
  );
};

interface ShaderMountProps {
  fragmentShader: unknown;
  style?: CSSProperties;
  uniforms?: Record<string, unknown>;
  speed?: number;
  seed?: number;
}

const ShaderMount = ({
  fragmentShader,
  style,
  uniforms = {},
  speed = 1,
  seed = 0,
}: ShaderMountProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shaderMountRef = useRef<any>(null);

  useEffect(() => {
    if (canvasRef.current) {
      shaderMountRef.current = new ShaderMountVanilla(
        canvasRef.current,
        fragmentShader,
        uniforms,
        {},
        speed,
        seed,
      );
    }

    return () => {
      shaderMountRef.current?.dispose();
    };
  }, [fragmentShader]);

  useEffect(() => {
    shaderMountRef.current?.setUniforms(uniforms);
  }, [uniforms]);

  useEffect(() => {
    shaderMountRef.current?.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    shaderMountRef.current?.setSeed(seed);
  }, [seed]);

  return <canvas ref={canvasRef} style={style} />;
};
