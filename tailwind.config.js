/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        faidIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        transY: {
          "0%": { transform: "translateY(-800px)" },
          "100%": { transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        faidIn: "faidIn 1s ease-in-out",
        transY: "transY 1s ease-in-out",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
