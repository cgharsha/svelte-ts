// Refs

// {
//   “env”: {
//   “browser”: true,
//   "commonjs": true,
//   "es6": true
//  },
//   “parserOptions”: {
//     “ecmaVersion”: 9,
//     “ecmaFeatures”: {
//       “impliedStrict”: true
//     },
//     "sourceType”: “module”
//   },
//   “plugins”: [
//     “svelte3”
//   ],
//   “overrides”: [
//     {
//      “files”: [
//         “*.svelte”
//       ],
//      “processor”: “svelte3/svelte3”
//     }
//   ],
//   “rules”: {
//     “semi”: “error”,
//     “no-console”: 0
//   },
//   “extends”: “eslint:recommended”
//  }

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true
  },
  plugins: ['@typescript-eslint', 'svelte3'],
  ignorePatterns: ['node_modules']
}
