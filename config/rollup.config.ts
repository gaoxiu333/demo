import typescript from "@rollup/plugin-typescript";

import { RollupOptions } from "rollup";

let config: import("rollup").RollupOptions = {
  input: "./src/test1.ts",
  output: {
    file: "bundletest.js",
    format: "cjs",
  },
  plugins: [typescript()],
};

export default config;


