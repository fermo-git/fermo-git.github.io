import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base relativa: así el build funciona igual en un repo de usuario
  // (usuario.github.io, servido en la raíz) que en un repo de proyecto
  // (usuario.github.io/nombre-del-repo/), sin tener que hardcodear el nombre.
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
