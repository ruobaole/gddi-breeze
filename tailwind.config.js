/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        logo: ['Oooh Baby'],
        home: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'bounce-quick': 'bounce 0.5s',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translateZ(0)',
          },
          '40%, 43%': {
            transform: 'translate3d(0,-8px,0)',
          },
          '70%': {
            transform: 'translate3d(0,-4px,0)',
          },
          '90%': {
            transform: 'translate3d(0,-2px,0)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
