import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/app.tsx'],
  bundle: true,
  minify: false,
  format: 'cjs',
  sourcemap: false,
  outfile: 'dist/output.js',
  // watch: true
  // external: ['react', 'react-dom'], 
})
