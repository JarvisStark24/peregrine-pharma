module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: 'rgb(236, 92, 66)',
        customBlue: '#19BCDB',
        customOrange: '#FF7F32',
      },
      width:{
        '120': '28.5rem'
      },
      animation: {
        blink: 'blink 1s infinite',
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
