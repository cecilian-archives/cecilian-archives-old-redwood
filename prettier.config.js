// https://prettier.io/docs/en/options.html
module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: 'always',
  overrides: [
    {
      files: 'Routes.js',
      options: {
        printWidth: 200,
      },
    },
  ],
}
