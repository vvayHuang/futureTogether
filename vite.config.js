import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/futureTogether',
  build: {
    outDir: 'dist', // 設置構建目錄為 dist
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      //點選連結時，可以保持原本的位置在畫面上的頂部
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,
  },
})
