/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter": '"Inter", sans-serif',
        "poppins": '"Poppins", system-ui'
      },
      colors:{
        "azureish-white": "#D6E2FA",
        "vampire-black": "#0A0103",
        "dark-liver": "#544D4F",
        "anti-flash-white": "#F1F1F1",
        "vodka": "#B7B8E5",
        "dark-gunmetal":"#192335",
        "ghost-white": "#F7F7FF",
        "violet-blue": "#6E71CC",
        "chinese-silver": "#CECCCD",
        "eerie-black": "#21191B",
        "powder-blue":"#B7DEE6",
        "munsell-red":"#ED0131",
        "spanish-gray":"#9D999A",
        "black-olive":"#403f3f",
        "raisin-black":"#262424",
        "button-blue":"#24A1DE",
        "alabaster":"#F6EDE7",
        "antique-brass":"#CD9371"
      }
    },
  },
  plugins: [],
}