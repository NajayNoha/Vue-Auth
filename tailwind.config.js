/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        edu: ['Roboto', 'sans-serif'],
      },
      spacing: {
        // PX
        '1A': '8px',
        '2A': '12px',
        '3A': '16px',
        '4A': '24px',
        '5A': '32px',
        '6A': '48px',
        '7A': '64px',
        '8A': '72px',
        '9A': '84px',
        '10A': '96px',
        // REM
        '10R': '10rem',
        '15R': '15rem',
        '100': '26rem',
        '28R': '28rem',
        '30R': '30rem',
        '32R': '32rem',
        '34R': '34rem',
        '36R': '36rem',
        '38R': '38rem',
        '40R': '40rem',
        '40R': '42rem',
      },
    },
  },
  plugins: [],
}

