import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  minify: true,
  format: "cjs",
  sourcemap: true,
  outfile: "dist/bundle.js",
  // watch: true
  // external: ['react', 'react-dom'],
});
