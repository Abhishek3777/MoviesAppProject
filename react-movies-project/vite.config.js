import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    base: '/my-movie-app/',
    // make sure the output is directed to 'dist'
  },
});
