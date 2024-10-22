/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "10px",
        md: "8rem",
        lg: "14rem",
      },
    },
  },
  plugins: [],
};
