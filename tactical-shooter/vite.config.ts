import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: '.',
  publicDir: 'public',
  build: {
    target: 'es2020',
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
});
