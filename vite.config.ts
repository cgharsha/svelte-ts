import { defineConfig } from 'vite'
// import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import "vitest/config"

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts'
  }
}))
