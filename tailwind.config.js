/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#D59E39',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          },
        },
        showBT:{
          from:{ opacity: 0},
          to: { opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        showBT: 'showBT .5s ease-in-out',
      },
    },
  },
  plugins: [],
}