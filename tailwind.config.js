// tailwind.config.js

/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: 'class', // This enables the use of the 'dark' class to toggle dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        'primary': '#4CAF50', // Custom primary color, previously --color-primary
        'secondary': '#333333', // Custom secondary color, previously --color-secondary
        'accent': '#b9cfa5', // Custom accent color, previously --color-accent
        'green-700': '#2D572C' // Darker green, you can adjust the hex as needed
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Inter font configured for sans-serif text
        'serif': ['Merriweather', 'serif'] // Merriweather font configured for serif text
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '0.375rem',
          fontWeight: '600',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme('colors.green-700')
          }
        },
        '.card': {
          backgroundColor: theme('colors.dark-gray'),
          color: theme('colors.light-gray'),
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        '.form-input': {
          borderRadius: '0.375rem',
          border: `1px solid ${theme('colors.light-gray')}`,
          '&:focus': {
            borderColor: theme('colors.accent'),
            boxShadow: `0 0 0 1px ${theme('colors.accent')}`,
          }
        }
      });
    }),
  ],
}
