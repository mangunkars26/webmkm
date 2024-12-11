/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22177A', // maroon
          light: '#A33E3E',
          dark: '#600000',
        }
      }
    },
  },
  plugins: [],
};