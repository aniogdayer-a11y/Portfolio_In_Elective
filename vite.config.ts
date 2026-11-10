import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio_In_Elective/' : './',
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.dev.html'),
    },
  },
  server: {
    open: '/index.dev.html',
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
