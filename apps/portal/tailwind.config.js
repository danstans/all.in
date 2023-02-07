const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("shared/tailwind.config")],
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared/**/*.styles.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...colors,
      primary: colors.blue,
      secondary: colors.blue,
      tertiary: colors.fuchsia,
    },
  },
  plugins: [],
};
