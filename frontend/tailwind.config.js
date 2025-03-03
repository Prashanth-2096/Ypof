/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ypof:{
          background:"#CAE8FF",
          DEFAULT:"#050A30"

        }
      }
    },
  },
  plugins: [],
}