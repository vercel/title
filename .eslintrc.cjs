/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [require.resolve('@vercel/style-guide/eslint/node')],
  root: true,
  reportUnusedDisableDirectives: true,
  parserOptions: {
    babelOptions: {
      plugins: [
        [
          '@babel/plugin-syntax-import-attributes',
          {
            deprecatedAssertSyntax: true,
          },
        ],
      ],
    },
  },
  rules: {},
  overrides: [
    {
      files: 'bin/title.js',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
