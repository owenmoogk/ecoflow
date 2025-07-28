import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export const ProjectJsonPath = path.resolve(
  __dirname,
  'src',
  'api',
  'projects.json'
);

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  server: {
    port: 3000,
  },
  base: '/ecoflow/',
});
