const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        samBlueLight: "#e9eef3",
        samBlue: "#a9bcd0",
        samDarkRed: "#8f2704",
        samGrey: "#383d3b",
        samGreyDark: "#333",
        samOrange: "#de5f2b",
      },
      fontFamily: {
        cooperBook: ["Cooper Hewitt Book", "Helvitica"],
        fontin: ["Fontin Sans Regular", "sans-serif"],
        fontinBold: ["Fontin Sans Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
