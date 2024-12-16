/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forange: {
          DEFAULT: '#FF5700', // Default shade
          light: '#FF7F33',   // Lighter variant if needed
          dark: '#CC4700',    // Darker variant if needed
        },
      },
      textColor: {
        DEFAULT: '#000000', // Default text color for all elements
      },
    },
  },
  plugins: [
  ],
};
