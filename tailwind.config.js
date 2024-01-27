/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ungu: '#5D50C6',
        pink: '#F85E9F',
        oren: '#FF5722',
        dark: '#191825',
        kuning: '#FACD49',
        grey: '#19182580',
        orenmuda: '#FACD4914',
        hijau: '#165C5D',
        textDark2: '#D1D5DB',
        textDark: '#D1D5DB',
        bgLigth: '#E5E7EB',
        bgDark: '#001524',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
