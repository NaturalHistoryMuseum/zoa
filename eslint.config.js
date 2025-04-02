import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  { ignores: ['dist/**/*'] },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    extends: ['js/recommended'],
  },
  pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/attributes-order': ['error', { alphabetical: true }],
    },
  },
  eslintConfigPrettier,
]);
