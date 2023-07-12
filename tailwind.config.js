const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "benefit-how":
          "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(143, 39, 4) 50%, rgb(143, 39, 4) 100%)",
      },
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
        cooperBold: ["Cooper Hewitt Bold", "Helvitica"],
        fontin: ["Fontin Sans Regular", "sans-serif"],
        fontinBold: ["Fontin Sans Bold", "sans-serif"],
        openSans: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
