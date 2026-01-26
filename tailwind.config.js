/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        ui: ["Poppins", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },

      colors: {
        background: "#0E0E0E",
        foreground: "#FFFFFF",
        muted: "#A1A1AA",
        accent: "#3B82F6",
      },
    },
  },

  plugins: [],
};
