const colors = require("tailwindcss/colors");

// Any changes to this file will need to restart the nextjs server.
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("tailwind-config")],
  content: ["./**/*.{js,ts,jsx,tsx}", "./**/*.styles.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.blue,
      tertiary: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [],
};
