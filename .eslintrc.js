module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 2017,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      },
      sourceType: 'module'
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'google'],
    rules: {
      'linebreak-style': 0,
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'no-console': 0,
      'valid-jsdoc': 1,
      'max-len': 0,
      'new-cap': 0,
      'prefer-const': 2,
      'space-in-parens': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'operator-linebreak': [
        2,
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
            '&&': 'before',
            '||': 'before'
          }
        }
      ],
      'require-jsdoc': [
        'off',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true
          }
        }
      ]
    }
  };
  