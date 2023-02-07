module.exports = {
  extends: ["next", "turbo", "prettier", "eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "airbnb"],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "quotes": [2, "double", { "avoidEscape": true }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1,
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
   "react/jsx-props-no-spreading": "off",
   "no-console": ["error", { allow: ["warn", "error"] }],
   "react/function-component-definition": [2, { "namedComponents": "arrow-function" }]
  },
};
