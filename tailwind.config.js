/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#faf0e4',
          200: '#f4dfc4',
          300: '#ecc79f',
          400: '#e2a773',
          500: '#d68c52',
          600: '#c87741',
          700: '#a76237',
          800: '#865032',
          900: '#6e432b',
        },
        secondary: {
          50: '#f9f7f4',
          100: '#f1ebe2',
          200: '#e3d5c3',
          300: '#d1b89e',
          400: '#bc9a78',
          500: '#a8815c',
          600: '#9a7051',
          700: '#7f5c44',
          800: '#674c3b',
          900: '#543f31',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f4dfc4 0%, #ecc79f 100%)',
        'cafe-pattern': "url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f4dfc4" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}