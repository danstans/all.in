const colors = require("tailwindcss/colors");

// Any changes to this file will need to restart the nextjs server.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{ts,tsx}",
    // "./src/_app.tsx",
    "./src/components/**/*.styles.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
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
