import builtinModules from 'builtin-modules';
import dotenv from 'dotenv';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, peerDependencies } from './package.json';

dotenv.config();
const isDevelopment = process.env.NODE_ENV === 'development';

const plugins = (umd = false) => [
  resolve(),
  commonJS({ include: /node_modules/ }),
  babel({ babelrc: false, exclude: 'node_modules/**' }),
  umd ? sizeSnapshot({ printInfo: isDevelopment }) : null,
  terser({ compress: !isDevelopment, mangle: !isDevelopment }),
];

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

export default [
  {
    external,
    input: './src/index.js',
    output: {
      esModule: false,
      file: 'dist/bundle.min.js',
      format: 'umd',
      name: 'napper-core',
    },
    plugins: plugins(true),
  },
  {
    external,
    input: {
      fp: './src/fp/index.js',
      index: './src/index.js',
      maths: './src/maths/index.js',
      strings: './src/strings/index.js',
    },
    output: { dir: './lib', format: 'esm' },
    plugins: plugins(),
  },
];
