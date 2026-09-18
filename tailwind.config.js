/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#900d09',
          'red-dark': '#6e0a07',
          'red-light': '#b51515',
          black: '#000000',
        },
        neutral: {
          50: '#fafafa',
          100: '#f9f9f9',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#777777',
          700: '#555555',
          800: '#333333',
          900: '#1a1a1a',
        },
        success: {
          DEFAULT: '#2e7d32',
          light: '#4caf50',
          dark: '#1b5e20',
        },
        warning: {
          DEFAULT: '#f9a825',
          light: '#fbc02d',
          dark: '#f57f17',
        },
        error: {
          DEFAULT: '#c62828',
          light: '#e53935',
          dark: '#b71c1c',
        },
      },
      fontFamily: {
        serif: ['Radley', 'serif'],
        script: ['Parisienne', 'cursive'],
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        'content': '1100px',
        'wide': '1370px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
