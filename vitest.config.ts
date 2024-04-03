/* eslint-disable import/no-unused-modules */
/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/public': resolve(__dirname, './public'),
    },
  },
});
