const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xss: '.625rem',
      },
      colors: {
        orange: colors.orange,
      },
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover_before',
        'hover_after',
        'focus_before',
      ],
    },
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),

    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.opacity-el': {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        ['after']
      )
    }),
  ],
}
