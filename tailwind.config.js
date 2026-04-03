/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FF8A50', // Brighter, more saturated peach
        turquoise: {
          light: '#D1ECEB',
          DEFAULT: '#88C9C5',
          dark: '#4A9E99',
          darker: '#2F6A67',
          blueish: '#CADBE7',
        },
        beige: {
          100: '#FFF5F0',
          200: '#FFE4D6',
          300: '#FFD4B8',
          400: '#FFC49E',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'], // Alternative for Intro with good Cyrillic support
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
