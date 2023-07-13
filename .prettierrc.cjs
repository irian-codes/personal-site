module.exports = {
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  semi: true,
  arrowParens: 'always',
  bracketSpacing: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
