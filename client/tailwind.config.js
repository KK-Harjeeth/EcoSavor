/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        borderRadius: {
          '2': '8px', // or any other value you want
        },
        primary:'#e50914', 
      }
    },
  },
  plugins: [],
}

