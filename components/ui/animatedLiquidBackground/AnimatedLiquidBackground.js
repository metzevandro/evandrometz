"use client";

import { useEffect, useRef, useMemo } from "react";
import {
  getShaderColorFromString,
  warpFragmentShader,
  PatternShapes,
  ShaderMount as ShaderMountVanilla,
} from "@/lib/framer/shader.js";

/* ===============================
   EASING SIMPLES (substitui cubicBezier)
================================ */
const speedEase = (x) => x * x * (3 - 2 * x);

/* ===============================
   PRESETS
================================ */
const templates = {
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
  }
};

/* ===============================
   COMPONENTE PRINCIPAL
================================ */
export default function AnimatedLiquidBackground({
  preset = "Prism",
  speed = 25,
  radius = "0px",
  style = {},
}) {
  const values = templates[preset] || templates.Prism;

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
        shape={PatternShapes[values.shape]}
        shapeScale={values.shapeSize / 100}
        softness={values.softness / 100}
        style={{ width: "100%", height: "100dvh" }}
      />
    </div>
  );
}

/* ===============================
   WARP
================================ */
const defaultPreset = {
  scale: 1,
  rotation: 0,
  color1: "hsla(0, 0%, 15%, 1)",
  color2: "hsla(203, 80%, 70%, 1)",
  color3: "hsla(0, 0%, 100%, 1)",
  proportion: 0.35,
  softness: 1,
  distortion: 0.25,
  swirl: 0.8,
  swirlIterations: 10,
  shapeScale: 0.1,
  shape: PatternShapes.Checks,
};

const Warp = (props) => {
  const uniforms = useMemo(() => {
    return {
      u_scale: props.scale ?? defaultPreset.scale,
      u_rotation: props.rotation ?? defaultPreset.rotation,
      u_color1: getShaderColorFromString(props.color1, defaultPreset.color1),
      u_color2: getShaderColorFromString(props.color2, defaultPreset.color2),
      u_color3: getShaderColorFromString(props.color3, defaultPreset.color3),
      u_proportion: props.proportion ?? defaultPreset.proportion,
      u_softness: props.softness ?? defaultPreset.softness,
      u_distortion: props.distortion ?? defaultPreset.distortion,
      u_swirl: props.swirl ?? defaultPreset.swirl,
      u_swirlIterations: props.swirlIterations ?? defaultPreset.swirlIterations,
      u_shapeScale: props.shapeScale ?? defaultPreset.shapeScale,
      u_shape: props.shape ?? defaultPreset.shape,
    };
  }, [props]);

  return (
    <ShaderMount
      fragmentShader={warpFragmentShader}
      uniforms={uniforms}
      speed={props.speed}
      seed={props.seed}
      style={props.style}
    />
  );
};

/* ===============================
   SHADER MOUNT
================================ */
const ShaderMount = ({
  fragmentShader,
  style,
  uniforms = {},
  speed = 1,
  seed = 0,
}) => {
  const canvasRef = useRef(null);
  const shaderMountRef = useRef(null);

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
