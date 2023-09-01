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
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/vue-fontawesome@latest-3',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-brands-svg-icons',
      ],
      output: {
        globals: { vue: 'Vue' },
        entryFileNames: 'zoa.js',
      },
    },
  },
  define: {
    'process.env': process.env,
  },
  css: {
    modules: {
      generateScopedName: 'zoa__[hash:base64:5]__[local]',
    },
  },
});
