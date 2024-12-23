/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        // Background
        "light-bg": "#F4F4F9",
        "dark-bg": "#14151a",
        // Text
        "primary-light-text": "#1F1F1F",
        "primary-dark-text": "#FFFFFF",
        "secondary-light-text": "#6D6D6D",
        "secondary-dark-text": "#B0B0B0",
        // Cards
        "card-light-bg": "#FFFFFF",
        "card-dark-bg": "#1f2022",
        // App Colors
        "red": "#E63946",
        "green": "#2A9D8F",
        "purple": "#a186eb",
        "blue": "#60A5FA"
      },
    },
  },
  plugins: [],
};
