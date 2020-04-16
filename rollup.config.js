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

const input = './src/index.js';

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

const options = {
  globals: { fs: 'fs' },
  name: 'nappr-core',
  sourcemap: true,
};

const plugins = (snapshots = true) => [
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
  (snapshots && sizeSnapshot()) || null,
  terser(),
];

export default [
  {
    external,
    input,
    output: {
      ...options,
      file: main,
      format: 'cjs',
    },
    plugins: plugins(),
  },
  {
    external,
    input,
    output: {
      ...options,
      file: browser,
      format: 'umd',
    },
    plugins: plugins(),
  },
  {
    external,
    input,
    output: {
      ...options,
      file: module,
      format: 'esm',
    },
    plugins: plugins(),
  },
  {
    // MODULES
    external,
    input: {
      fp: './src/fp/index.js',
      maths: './src/maths/index.js',
      objects: './src/objects/index.js',
      strings: './src/strings/index.js',
      utils: './src/utils/index.js',
    },
    output: {
      ...options,
      dir: './lib',
      format: 'esm',
    },
    plugins: plugins(false),
  },
];
