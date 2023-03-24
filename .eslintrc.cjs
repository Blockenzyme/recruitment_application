module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    'arrow-body-style': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        // ObjectExpression: 'always',
        // ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: 'never',
      },
    ],
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
      },
    ],
  },
};
