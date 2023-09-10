const { nodeExternalsPlugin } = require("esbuild-node-externals");
module.exports = {
  entryPoints: ["./src/index.ts"],
  outfile: "build/index.js",
  bundle: true,
  minify: true,
  platform: "node",
  sourcemap: true,
  target: "node16",
  format: "esm",
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  plugins: [nodeExternalsPlugin()],
};
