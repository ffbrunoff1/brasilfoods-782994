/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF', // Very light blue
          100: '#CCE3FF',
          200: '#99C7FF',
          300: '#66A9FF',
          400: '#338CFF',
          500: '#006FFF', // Main corporate blue
          600: '#005CE6',
          700: '#004A99',
          800: '#00386B',
          900: '#00264A',
          950: '#00142A',
        },
        secondary: {
          50: '#FFF5E6', // Very light orange/yellow
          100: '#FFECC0',
          200: '#FED899',
          300: '#FDC473',
          400: '#FBAF4D',
          500: '#F99B26', // Complementary orange for food
          600: '#E08B1F',
          700: '#C77B19',
          800: '#AE6A12',
          900: '#955A0B',
          950: '#7B4A04',
        },
        accent: {
          50: '#F0FFE6', // Very light green
          100: '#E0FFCC',
          200: '#C7FF99',
          300: '#A9FF66',
          400: '#8CFF33',
          500: '#6FFF00', // Bright green for fresh food/health
          600: '#5CE600',
          700: '#4A9900',
          800: '#386B00',
          900: '#264A00',
          950: '#142A00',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'], // Example custom font, ensure to import in index.css
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
