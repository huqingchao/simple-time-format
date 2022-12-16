import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'rollup-template',
    },
  ],
  watch: {
    include: 'src/**',
  },
  external: ['src/types/index.ts'],
  plugins: [resolve(), commonjs(), typescript(), terser()],
}
