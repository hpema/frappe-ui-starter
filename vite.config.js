import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import frappeui from 'frappe-ui/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ...frappeui({
      lucideIcons: true,
      frappeProxy: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: `../${path.basename(path.resolve('..'))}/public/frontend`,
    emptyOutDir: true,
    target: 'es2015',
    commonjsOptions: {
      include: [/interactjs/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ['frappe-ui > feather-icons', 'interactjs'],
  },
})
