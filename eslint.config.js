import { reactConfig } from '@nappr/eslint-config';

export default [
  ...reactConfig,
  {
    ignores: ['dist/**', 'docs/**', 'node_modules/**'],
  },
];
