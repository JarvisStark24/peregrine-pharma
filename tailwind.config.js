module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: 'rgb(236, 92, 66)',
        customBlue: '#19BCDB'
      },
      animation: {
        blink: 'blink 1s',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      fontFamily: {
        "red-hat": ['"Red Hat Display"', "sans-serif"],
      },
      fontWeight: {
        200: "200",
      },
    },
  },
  plugins: [],
}
