import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';

// Kiểm tra đang chạy "build" hay "dev"
const isLib = process.env.MODE === 'lib';
// https://vite.dev/config/
export default defineConfig({
  root: isLib ? '.' : 'demo', // Nếu chạy demo, root là "demo"
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  build: isLib
    ? {
        lib: {
          entry: path.resolve(__dirname, 'lib/index.ts'),
          name: 'YourVueLib',
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: { vue: 'Vue' },
          },
        },
      }
    : undefined,
});
