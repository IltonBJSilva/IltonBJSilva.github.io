/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        ink: {
          950: '#070b14',
          900: '#0c1220',
          850: '#101828',
          800: '#151f33',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(59 130 246 / 0.25), 0 20px 50px -20px rgb(59 130 246 / 0.45)',
      },
    },
  },
  plugins: [],
};
