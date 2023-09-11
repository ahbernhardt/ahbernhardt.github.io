/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
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
    fontFamily: {
      josef: ['Josefin Slab', "serif"],
      neueHaas: ['Neue-Haas-Gotesk', "sans-serif"]
    },
    extend: {
      colors: {
        mono14: "#202527",
        abFrost: "rgb(255, 255, 255)",
        abShadow: "rgb(55, 58, 54)",
        abOffWhite: "#ededed",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
    variants: {},
    plugins: [],
  },
};
