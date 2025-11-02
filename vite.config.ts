import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
      rollupTypes: true,
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'napprCore',
      fileName: (format) => `nappr-core.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2020',
  },
});
