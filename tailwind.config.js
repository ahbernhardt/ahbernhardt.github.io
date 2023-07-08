/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    fontFamily: {},
    extend: {
      colors: {
        // Primary colors
        abOrange: "rgb(121, 188, 67)",
        abMidnight: "rgb(12, 35, 63)",
        abLake: "rgb(38, 96, 146)",
        // Secondary colors
        abFrost: "rgb(255, 255, 255)",
        wolvesMoonlight: "rgb(160, 162, 163)",
        abShadow: "rgb(55, 58, 54)",
        abOffWhite: "#ededed",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    variants: {},
    plugins: [],
  },
};
