import builtinModules from 'builtin-modules';
import dotenv from 'dotenv';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, peerDependencies } from './package.json';

dotenv.config();
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

const plugins = (umd = false) => [
  resolve(),
  commonJS({ include: /node_modules/ }),
  babel({ babelrc: false, exclude: 'node_modules/**' }),
  umd ? sizeSnapshot({ printInfo: !isProduction }) : null,
  terser({ compress: isProduction, mangle: isProduction }),
];

export default [
  {
    external,
    input: './src/index.js',
    output: {
      esModule: false,
      file: 'lib/nappr-core.min.js',
      format: 'umd',
      name: 'nappr-core',
    },
    plugins: plugins(true),
  },
  {
    external,
    input: {
      fp: './src/fp/index.js',
      index: './src/index.js',
      maths: './src/maths/index.js',
      objects: './src/objects/index.js',
      strings: './src/strings/index.js',
      utils: './src/utils/index.js',
    },
    output: { dir: './lib', format: 'esm', name: 'nappr-core' },
    plugins: plugins(),
  },
];
