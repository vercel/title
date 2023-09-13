/**
 * @type {import('lint-staged').Config}
 */
// eslint-disable-next-line import/no-default-export -- The tool expects a default export.
export default {
  '*': 'pnpm run format --write',
  '*.js': 'pnpm run lint-js --fix',
};
