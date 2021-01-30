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
        cyan: colors.cyan,
        "light-blue": colors.lightBlue,
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
      spacing: {
        '30': '7.5rem',
        '100px': '100px',
        '1/10': '10%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '55%': '55%',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      padding: ['hover', 'focus', 'group-hover'],
      display: ['hover', 'group-hover'],
      borderWidth: ['hover', 'focus', 'group-hover'],
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
