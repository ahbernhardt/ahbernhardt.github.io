const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");


const { flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './utils/**/*.{js,jsx,mdx}',
    './public/**/*.{js,jsx,mdx}',
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
        gray7B: "#7B8898",
        offBlack: "#0c0c0c"
      },
      backgroundImage: {
        dot: ["radial-gradient(#2d2d2d_1px,transparent_1px)", "background-size:32px_32px"],
      },
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
    plugins: [
      addVariablesForColors,
    ],
  }
}
   

  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }