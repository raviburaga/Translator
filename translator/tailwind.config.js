module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-mono': {
          50: '#ffe5e5',
          100: '#fbbaba',
          200: '#f68e8e',
          300: '#f06262',
          400: '#eb3636',
          500: '#d21d1d',
          600: '#a11616',
          700: '#710f0f',
          800: '#400808',
          900: '#100101',
        },
      },
      backgroundImage: {
        'custom-bg': "url('../public/main.png')",
      },
    },
  },
  plugins: [],
};
