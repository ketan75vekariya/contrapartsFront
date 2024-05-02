/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#0070f3",
        lightBlack: "hsl(212,15%,22.2% )",
        lightTil: "hsl(183,100%,35.5% )",
        lightGray: "hsl(0,0.0%,93.3% )",
        darkOrange: "hsl(14,100%,56.7% )",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
};
