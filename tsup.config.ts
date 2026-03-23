import { defineConfig } from 'tsup';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
);

export default defineConfig({
  entry: ['src/**/*.ts'],
  clean: true,
  dts: true,
  bundle: false,
  splitting: true,
  define: {
    'process.env.PKG_VERSION': JSON.stringify(version),
  },
  format: ['esm', 'cjs'],
});
