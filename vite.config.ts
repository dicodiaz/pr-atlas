import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    exclude: ['node_modules/**', 'e2e/**', '.pnpm-store/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'src/test/**',
        'src/data/**',
        'src/i18n/**',
        'src/types/**',
        'src/components/charts/**',
        'src/lib/search-worker.ts',
        'src/lib/search-worker-protocol.ts',
        'src/lib/use-search-worker.ts',
        'src/lib/logger.ts',
      ],
    },
  },
})
