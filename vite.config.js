import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        zoa: 'src/main.js',
      },
      name: 'Zoa',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        entryFileNames: 'zoa.[format].js',
      },
    },
  },
  define: {
    'process.env': process.env,
  },
});
