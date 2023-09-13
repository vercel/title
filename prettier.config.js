import vercelPrettierConfig from '@vercel/style-guide/prettier/index.js';

/**
 * @type {import('prettier').Config}
 */
// eslint-disable-next-line import/no-default-export -- The tool expects a default export.
export default {
  ...vercelPrettierConfig,
};
