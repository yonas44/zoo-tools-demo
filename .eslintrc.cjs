module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "no-shadow": "off",
    "no-console": "warn",
  },
  ignorePatterns: ["dist/", "build/"],
};
