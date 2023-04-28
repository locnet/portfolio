/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      roboto: ["Roboto"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        0: "0%",
      },
    },

    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      slate: colors.slate,
      zinc: colors.zinc,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
      blue: colors.blue,
      rose: colors.rose,
      purple: colors.purple,
      teracota: "#ff8966",
      arcilla: "#E0C097",
      arena: "#f8f4e3",
      nikel: "#706c61",
      dark_brown: "#2a2b2a",
      brick: "#E5446D",
      amber: colors.amber,
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
