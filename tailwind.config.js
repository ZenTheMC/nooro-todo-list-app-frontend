/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerDark: "#131313",
        bodyDark: "#1D1D1D",
        brandBlue: "#2271F3",
        brandPurple: "#A064F4",
      },
    },
  },
  safelist: [
    {
      pattern: /border-(red|blue|green|purple|yellow|pink|gray)-500/,
    },
    {
      pattern: /hover:border-(red|blue|green|purple|yellow|pink|gray)-500/,
    },
    {
      pattern: /bg-(red|blue|green|purple|yellow|pink|gray)-500/,
    },
    {
      pattern: /checked:bg-(brandBlue|brandPurple)/,
    },
    {
      pattern: /border-(brandBlue|brandPurple)/,
    },
    {
      pattern: /checked:before:content-\['\\2713'\]/,
    },
  ],
  plugins: [],
};
