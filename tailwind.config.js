/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1A4022',
        'faint_black':'#696873',

        'primary-green': '#1A4022',
        'primary-light-green' : '#5F891C',
        'primary-yellow': '#E5951A',
        'primary-gray': '#828282',
        'dashboard-bg': '#F8F8F8',
        'faint-black': '#333333',
      }
    },
  },
  plugins: [],
}
