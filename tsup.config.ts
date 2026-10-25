import { defineConfig } from 'tsup';

// Bundles the whole CLI into one file: dist/cli.js (the shebang is kept).
export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  target: 'node20',
  clean: true,
  sourcemap: false,
});
