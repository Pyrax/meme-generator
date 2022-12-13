const plugin = require('tailwindcss/plugin');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // Custom plugin for background patterns:
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      const defaultColor = theme('colors.gray.400');

      // Definition of pattern types
      addUtilities({
        '.pattern-dots': {
          'background-image': `radial-gradient(var(--pattern-color, ${defaultColor}) 15%, transparent 16%)`,
          'background-size':
            'var(--pattern-size, 10px) var(--pattern-size, 10px)',
        },
      });

      // Pattern sizes
      matchUtilities(
        {
          pattern: (value) => ({
            '--pattern-size': value,
          }),
        },
        { values: theme('spacing') }
      );

      // Pattern colors from complete color palette
      matchUtilities(
        {
          pattern: (value) => ({
            '--pattern-color': value,
          }),
        },
        { values: flattenColorPalette(theme('colors')), type: 'color' }
      );
    }),
  ],
};
