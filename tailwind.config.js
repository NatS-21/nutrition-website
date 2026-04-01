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
        pantone: '#779365',
        mint: {
          light: '#D5E5C9',
          DEFAULT: '#A5B99A',
          dark: '#779365',
          darker: '#5E7151',
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
