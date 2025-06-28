/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1D26',
        primary: '#FFFFFF',
        secondary: '#FBBF24',
        'primary-dark': '#E5E7EB',
        'secondary-light': '#FCD34D',
        'secondary-dark': '#F59E0B',
      },
    },
  },
  plugins: [],
} 