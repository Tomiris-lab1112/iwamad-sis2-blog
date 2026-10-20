/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/iwamad-sis2-blog/',
  build: { outDir: 'docs' },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
