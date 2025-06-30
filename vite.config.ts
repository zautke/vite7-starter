import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import Terminal from "vite-plugin-terminal";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare(),
    Terminal({
      console: 'terminal',
      output: ['terminal', 'console']
    })
  ],
})
