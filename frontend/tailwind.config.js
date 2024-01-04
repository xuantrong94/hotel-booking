/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      xxl: "6rem",
    },
    center: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
