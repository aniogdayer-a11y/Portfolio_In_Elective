import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  server: {
    open: true,
    port: 5173,
    host: true,
    watch: {
      ignored: [
        '**/MIDTERM/**',
        '**/PRELIM/**',
        '**/FINAL/**',
        '**/*.pdf',
        '**/PORTFOLIO.html',
      ],
    },
  },
})
