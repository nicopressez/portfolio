/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roobert: ["Roobert", "sans-serif"],
        roobertreg: ["RoobertReg", "sans-serif"],
        roxborough: ["Roxborough", "sans-serif"]
      }
    },
  },
  plugins: [],
}

