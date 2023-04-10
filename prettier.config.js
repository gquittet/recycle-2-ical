module.exports = {
  editorconfig: true,
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
};
