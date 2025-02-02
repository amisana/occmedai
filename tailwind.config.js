/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(209 213 219)', // text-gray-300
            maxWidth: '65ch',
            h1: {
              color: 'rgb(255 255 255)',
            },
            h2: {
              color: 'rgb(255 255 255)',
            },
            h3: {
              color: 'rgb(255 255 255)',
            },
            strong: {
              color: 'rgb(255 255 255)',
            },
            a: {
              color: 'rgb(74 222 128)', // text-green-400
              textDecoration: 'none',
            },
            code: {
              color: 'rgb(74 222 128)',
            },
            pre: {
              backgroundColor: 'rgb(3 7 18 / 0.5)',
              color: 'rgb(209 213 219)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
} 