/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          100: "#caf0f8",
          200: "#a3ecdd",
          300: "#48cae4",
          400: "#00b4d8",
          500: "#0096c7", //logo color
          600: "#0077b6", //main primary color of website
          700: "#023e8a",
          800: "#03045e",
        },
        textColor: {
          100: "#3d3d3d",
        },
      },
    },
    fontFamily: {
      alike: ["'Alike', serif"]
    },
  },
};