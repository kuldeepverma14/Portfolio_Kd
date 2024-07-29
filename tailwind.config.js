/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the path to match your project structure
  ],
  theme: {
    screens: {
      'xxsm': '340px',
      'xsm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus', 'hover'],
    },
  },
  plugins: [],
}

