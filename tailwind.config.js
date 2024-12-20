/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#1570EF",
        black:"#181D27",
        darkBlue:"#175CD3",
        gray:"#D5D7DA",
        lightBlue:"#EFF8FF",
        shadowBlue:"#B2DDFF"
      },
      fontFamily:{
        Inter:[ "Inter", "serif" ]
      }
    },
  },
  plugins: [],
}