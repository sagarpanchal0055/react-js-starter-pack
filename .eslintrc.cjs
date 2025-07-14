module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.cjs', // <-- Corrected this line
    'postcss.config.js',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['.eslintrc.cjs', 'tailwind.config.cjs', 'postcss.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
