import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['components/rich-text-rtl/index.ts'],
  format: ['cjs', 'esm'],
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  tsconfig: 'tsconfig.build.json',
  // Esbuild handles alias resolution internally, but let's make sure it knows where things are
  // if you have path aliases in tsconfig.
});
