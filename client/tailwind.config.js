/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#256af4',
        'bg-light': '#f5f6f8',
        'bg-dark': '#101622',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideDown: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
