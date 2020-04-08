import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import builtinModules from 'builtin-modules';
import dotenv from 'dotenv';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import {
  browser,
  dependencies,
  main,
  module,
  peerDependencies,
} from './package.json';

dotenv.config();
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

const plugins = () => [
  postcss({
    minimize: !isProduction,
    plugins: [],
    sourceMap: (isProduction && 'inline') || false,
  }),
  url(),
  svgr(),
  resolve({ extensions: ['.js', '.jsx'] }),
  babel({
    babelrc: true,
    exclude: ['node_modules/**'],
    runtimeHelpers: true,
  }),
  commonjs(),
  sizeSnapshot(),
  terser(),
];

export default {
  external,
  input: './src/index.js',
  output: [
    {
      file: main,
      format: 'cjs',
      name: 'nappr-core',
      sourcemap: true,
    },
    {
      file: browser,
      format: 'umd',
      name: 'nappr-core',
      sourcemap: true,
    },
    {
      file: module,
      format: 'esm',
      name: 'nappr-core',
      sourcemap: true,
    },
  ],
  plugins: plugins(),
};
