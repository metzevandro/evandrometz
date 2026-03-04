/** The core Shader Mounting class. Pass it a canvas element and a fragment shader to get started. */ import { jsx as _jsx } from "react/jsx-runtime";
export { ShaderMount } from "@/lib/framer/shaderMount.js"; // ----- Warping Distortion ----- //
/** Warp: distortion + swirl + underlying shapes */ export {
  warpFragmentShader,
  PatternShapes,
} from "@/lib/framer/warp.js"; // ----- Uniform conversion utils ----- //

export { getShaderColorFromString } from "@/lib/framer/shaderColorFromString.js";
export default function A(props) {
  return /*#__PURE__*/ _jsx("div", {});
}
export const __FramerMetadata__ = {
  exports: {
    PatternShapes: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    PatternShape: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    ShaderMount: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    getShaderColorFromString: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    default: {
      type: "reactComponent",
      name: "A",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    warpFragmentShader: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    WarpUniforms: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./index.map
