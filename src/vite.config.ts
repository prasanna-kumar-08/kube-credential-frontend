import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/issue': 'http://localhost:3000',
      '/verify': 'http://localhost:3001'
    }
  }
});
