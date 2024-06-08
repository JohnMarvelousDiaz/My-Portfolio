/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f1724",
        secondary: "#5185cf",
        tprimary: "#d2ebfa"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        inconsolata: ['Inconsolata'],
      },
    },
  },
  plugins: [],
};
