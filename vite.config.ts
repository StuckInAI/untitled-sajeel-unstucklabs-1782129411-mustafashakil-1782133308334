import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const forceFullReload = {
  name: 'force-full-reload',
  handleHotUpdate({ server }: { server: any }) {
    server.ws.send({ type: 'full-reload' });
    return [];
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), forceFullReload],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  build: {
    rollupOptions: {
      // Ensure react-dom is resolved properly
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
