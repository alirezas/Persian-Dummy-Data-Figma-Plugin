const esbuild = require("esbuild");

// sandbox

esbuild
  .build({
    entryPoints: ["src/code.ts"],
    bundle: true,
    platform: "node",
    target: ["node18"],
    outfile: "dist/code.js",
  })
  .catch(() => process.exit(1));
