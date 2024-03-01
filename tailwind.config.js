const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { 
  default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    // breakpoints have been tailored to the most popular screen sizes
    screens: {
      xs: "430px",
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    fontFamily: {
      josef: ['Josefin Slab', "serif"],
      neueHaas: ['Neue-Haas-Gotesk', "sans-serif"],
      abril: ['Abril Fatface', "cursive"],
      poppins: ['Poppins', "sans-serif"]
    },
    extend: {
      colors: {
        frost: "rgb(255, 255, 255)",
        mono14: "#202527",
        offWhite: "#dedede",
        redOrange: "#FF6A67",
        shadow: "#373A36FF",
        gray55: "#556271",
        gray68: "#687789",
        gray7B: "#7B8898"
      },
      backgroundImage: {},
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        front: "1000",
        back: "-1000",
      },
    },
    important: true,
    variants: {},
    plugins: [addVariableForColors],
  },
};

function addVariableForColors({addBase, theme}){
  let allColors = flattenColorPalette(theme("colors"));

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key,val]) => [ `--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}