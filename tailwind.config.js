/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
    },
  },
  plugins: [],
}

