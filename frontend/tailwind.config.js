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
      },
      keyframes:{
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #ffffff' },
          '50%': { textShadow: '0 0 20px #ff6b6b' }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' }
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        typing: 'typing 3s steps(20) infinite alternate',
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        glow: 'glow 1.5s infinite alternate',
        wave: 'wave 0.5s ease-in-out infinite alternate',
        zoom: 'zoom 1.5s infinite'

      }
    },
  },
  plugins: [],
}