import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split vendor modules into a separate chunk
            return 'vendor';
          }
          if (id.includes('lottie-web') || id.includes('react-lottie')) {
            // Split Lottie into a separate chunk
            return 'lottie';
          }
        }
      }
    }
  }
});
