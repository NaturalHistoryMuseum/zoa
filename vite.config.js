import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: {
        zoa: 'src/main.js',
        'zoa-elements': 'src/elements.js',
        'bundles/basics': 'src/bundles/basics.js',
      },
    },
  },
  define: {
    'process.env': process.env,
  },
});
