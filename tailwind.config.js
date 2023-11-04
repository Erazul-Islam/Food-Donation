/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
  daisyui: {
    themes: ["valentine"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },
  
}

