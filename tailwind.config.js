/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGray: "#F0F0F1",
        bgWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
