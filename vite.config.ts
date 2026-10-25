import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://chester7777.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
});
