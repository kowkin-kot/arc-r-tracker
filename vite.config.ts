import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@theme/v4';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    // КРИТИЧНО: Название вашего репозитория на GitHub
    base: '/arc-r-tracker/', 
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };
});
