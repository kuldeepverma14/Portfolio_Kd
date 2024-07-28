/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the path to match your project structure
  ],
  theme: {
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

