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
      // function ({ matchUtilities, theme }) {
      //   matchUtilities(
      //     {
      //       "bg-dot": (value) => ({
      //         backgroundImage: `url("${svgToDataUri(
      //           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
      //         )}")`,
      //       }),
      //     },
      //     { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      //   ),
      // }
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