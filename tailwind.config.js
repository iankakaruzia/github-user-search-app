/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'monospace']
      },
      fontSize: {
        heading1: ['1.625rem', '2.375rem'],
        heading2: ['1.375rem', '2.063rem'],
        heading4: ['0.813rem', '1.25rem'],
        body: ['0.938rem', '1.563rem']
      },
      borderRadius: {
        '2xl': '0.938rem'
      },
      boxShadow: {
        xl: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      },
      colors: {
        blue: {
          200: '#90A4D4',
          300: '#60ABFF',
          500: '#0079FF',
          700: '#4B6A9B',
          900: '#1E2A47'
        },
        gray: {
          100: '#FEFEFE',
          200: '#F6F8FF',
          500: '#697C9A',
          600: '#2B3442',
          700: '#222731',
          900: '#141D2F'
        },
        red: {
          500: '#F74646'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
