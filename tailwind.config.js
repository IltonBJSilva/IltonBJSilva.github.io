/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e6efff',
          200: '#bfd3ff',
          300: '#99b7ff',
          400: '#4d7eff',
          500: '#0045ff',
          600: '#003be6',
          700: '#0031bf',
          800: '#002799',
          900: '#00207d',
        }
      }
    },
  },
  plugins: [],
};