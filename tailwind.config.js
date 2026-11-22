const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './pages/**/*.{html,ts}',
    './layout/**/*.{html,ts}'
  ],
  // Neon card colors are built at runtime ("text-" + color), so JIT can't see them.
  safelist: [
    { pattern: /^(text|border)-(bl|grn|prpl|pnk)$/ },
    { pattern: /^ring-(bl|grn|prpl|pnk)$/, variants: ['hover'] },
  ],
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bl': '#1d8cf8',
        'ndg': '#171941',
        'pnk': '#e14eca',
        'prpl': '#ba54f5',
        'rng': 'orange-500',
        'pct': '#344675',
        'grn': '#00f2c3',
      }
      // 'sm': '640px',  // => @media (min-width: 640px) { ... }
      // 'md': '768px',  // => @media (min-width: 768px) { ... }
      // 'lg': '1024px', // => @media (min-width: 1024px) { ... }
      // 'xl': '1280px', // => @media (min-width: 1280px) { ... }
      // '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
