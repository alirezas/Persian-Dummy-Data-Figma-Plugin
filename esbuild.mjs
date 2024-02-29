import { build } from "esbuild";

// sandbox

build({
  entryPoints: ["src/code.ts"],
  bundle: true,
  platform: "node",
  target: ["node18"],
  outfile: "dist/code.js",
  // eslint-disable-next-line no-undef
}).catch(() => process.exit(1));
