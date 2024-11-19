import { defineConfig, Options } from 'tsup'
import fs from 'node:fs/promises'
import path from 'node:path'

const sharedConfig: Options = {
  entry: ['src/**/*.ts'],
  clean: true,
  dts: true,
  bundle: false,
  splitting: true,
}

export default defineConfig([
  {
    format: 'esm',
    outDir: 'dist/esm',
    ...sharedConfig
  },
  {
    format: 'cjs',
    outDir: 'dist/cjs',
    outExtension: () => ({ js: '.js' }),
    async onSuccess() {
      await fs.writeFile(path.resolve('dist', 'cjs', 'package.json'), '{"type": "commonjs","sideEffects":false}');
    },
    ...sharedConfig
  },
])
