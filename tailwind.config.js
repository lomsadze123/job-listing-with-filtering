/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0px 15px 20px -5px rgba(13, 113, 130, 0.15)'
      }
    },
  },
  plugins: [],
};