import vue from '@vitejs/plugin-vue';
import crypto from 'crypto';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), visualizer()],
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
        '@fortawesome/vue-fontawesome',
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
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        let componentName;
        // prefer using the component name, but fall back to hash if that
        // doesn't work
        try {
          componentName = filename.split('/').pop().split('.')[0].toLowerCase();
        } catch {
          componentName = crypto
            .createHash('md5')
            .update(css)
            .digest('base64')
            .substring(0, 5);
        }
        return `zoa__${componentName}__${name}`;
      },
    },
  },
});
