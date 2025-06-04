/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D262D",
        secondary: "#22D3EE",
        accent: "#F43F5E",
        dark: "#0F172A",
        light: "#F8FAFC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
