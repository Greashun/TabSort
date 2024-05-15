import { defineConfig } from 'vite'
import { fileURLToPath} from 'url'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import webExtension from "vite-plugin-web-extension";

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.join(__dirname, './tabsort'), 
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: new URL('./index.html', import.meta.url).pathname,
        background: new URL('./background.html', import.meta.url).pathname,
      }
    }
  },
  permissions: ["tabs"]
})
