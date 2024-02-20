module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "next/core-web-vitals",
    "next",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "prettier"
  ],
  "overrides": [".eslintrc.{js,cjs,jsx}"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": ["module","script"]
  },
  "rules":{
    quotes:["warn", "double"],
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "no-const-assign": "warn",
    "no-var": "warn",
    "prefer-object-spread": "warn",
    "prefer-destructuring": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-filename-extension": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-boolean-value": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "react/no-array-index-key": "warn",
    "jsx-a11y/aria-role": "warn",
    "prefer-destructuring": "warn",
    "prefer-template": "warn",
    "template-curly-spacing": "warn",
    "default-param-last": "warn",
    "prefer-arrow-callback": "warn",
    "arrow-spacing": "warn",
    "no-iterator": "warn",
    "no-restricted-syntax": "warn",
    "spaced-comment": "warn",
    "id-length": "warn",
    camelcase: "warn",
    "@next/next/no-img-element": "off",
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": 0
  },
  ignorePatterns: ['.eslintrc.js']
}