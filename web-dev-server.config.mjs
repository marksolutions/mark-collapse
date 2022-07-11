import rollupCommonjs from "@rollup/plugin-commonjs";
import { fromRollup } from "@web/dev-server-rollup";
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fileURLToPath } from "url";

const commonjs = fromRollup(rollupCommonjs);

export default {
  appIndex: "demo/index.html",
  open: true,
  nodeResolve: true,
  // esbuildTarget: "auto",
  plugins: [
    commonjs(),
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
    }),
  ],
};
