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
        'zoa-wc': 'src/elements.js',
        'zoa-vue': 'src/components/index.js',
        'bundles/basics': 'src/bundles/basics.js',
        'bundles/all': 'src/bundles/all.js',
      },
    },
  },
  define: {
    'process.env': process.env,
  },
});
