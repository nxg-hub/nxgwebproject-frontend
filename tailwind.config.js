/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontSize: {
        sm: '0.8rem',
        normal: '1rem',
        md: '1.3rem',
        lg: '1.8rem',
        xl: '2.2rem',
        xxl: '3rem',
        xxxl: '4.4rem'
      },
      colors: {
        primary: "#FFFFFF",
        secondary: '#2596BE',
        gray: "#4D4D4D",
        lightGray: "#F1F1F1",
        darkGray: "#53585B",
        red: "#E60000",
      },
      extend: {
        screens: {
          'sm': '200px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [],
  }