import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import builtinModules from 'builtin-modules';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
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

function getModulesInputs() {
  const sourcPath = './src';
  const opts = { withFileTypes: true };
  const dirents = fs.readdirSync(sourcPath, opts);
  const folders = dirents.reduce((acc, dirent) => {
    if (!dirent.isDirectory()) return acc;
    const { name } = dirent;
    const folder = path.join(sourcPath, name, 'index.js');
    return { ...acc, [name]: folder };
  }, {});
  return folders;
}

dotenv.config();
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const input = './src/index.js';

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

const plugins = (snapshots = true) => [
  postcss({
    minimize: !isProduction,
    plugins: [],
    sourceMap: (isProduction && 'inline') || false,
  }),
  url(),
  svgr(),
  nodeResolve({ extensions: ['.js', '.jsx'] }),
  babel({
    babelrc: true,
    exclude: ['node_modules/**'],
    externalHelpers: true,
    runtimeHelpers: true,
  }),
  commonjs(),
  (snapshots && sizeSnapshot()) || null,
  terser(),
];

const options = {
  globals: { fs: 'fs' },
  name: 'nappr-core',
  sourcemap: true,
};

const outputs = [
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
];

export default [
  ...outputs,
  {
    // MODULES LIb
    external,
    input: getModulesInputs(),
    output: {
      ...options,
      dir: './lib',
      format: 'esm',
      sourcemap: false,
    },
    plugins: plugins(false),
  },
];
