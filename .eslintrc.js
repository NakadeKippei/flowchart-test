module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  globals: {
    document: true,
    window: true,
    module: true,
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
