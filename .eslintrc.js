module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
  },
  "overrides": [
    {
        "files": ["**/*.tsx"],
        "rules": {
            "react/prop-types": "off"
        }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  // eslintの対象外ファイル
  "ignorePatterns": [
    "**/public/*",
    "**/node_modules/*",
    "**/.vscode/*",
    ".eslintrc.js",
    ".prettierrc.js",
    "webpack.config.js",
  ],
}