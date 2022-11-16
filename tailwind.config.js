/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E67EB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
