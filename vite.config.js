import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for better debugging
  },
  resolve: {
    alias: {
      // Optional: Simplify imports with absolute paths (e.g., `import components/MyComponent`)
      '@': resolve(__dirname, './src'),
    },
  },
});