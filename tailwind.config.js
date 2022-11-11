/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',


  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purpleverylight': '#C8B6E2',
      'purplelight': '#9F73AB',
      'purpledark': '#624F82',
      'purpleverydark': '#3F3B6C',
      'white': '#fff',
      'Blue': '#FFFADE',
      'pink': '#FCF7FF',
      'surligner': '#283593',
      'bleubasic': '#2196F3',
      'Gris': '#37474F',
      'teal200': '#311B92',
      'beige': '#F5EFE6',
      'bleuclair': '#C8B6E2',
    },

    extend: {
      fontFamily: {
        Burtons: ["Burtons", "cursive"],
      }
    },
  },
  plugins: [],
}
