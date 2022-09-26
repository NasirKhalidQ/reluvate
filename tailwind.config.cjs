/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tile: "url('https://pokenex.vercel.app/bg-tile.png')",
      },
    },
  },
  plugins: [],
};
