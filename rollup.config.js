import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import { dependencies, peerDependencies } from './package.json';

const isDevelopment = process.env.NODE_ENV !== 'production';
const nodeExternalBuiltIns = [];

export default {
  external: [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
    ...nodeExternalBuiltIns,
  ],
  input: {
    index: './src/index.js',
    'strings/index': './src/strings/index.js',
  },
  output: {
    dir: './lib',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonJS({ include: /node_modules/ }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
    }),
    terser({
      compress: !isDevelopment,
      mangle: !isDevelopment,
    }),
  ],
};
