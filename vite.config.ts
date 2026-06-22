import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

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
});
