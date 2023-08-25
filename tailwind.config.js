/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        btnBG: "#F8F9FA",
        selectedBtnBG: "#E2E3E8",
        barColor: "#FED500",
        insightRed: "#FF624D",
        insightGreen: "#4DFF54",
        insightTipBG: "#F4F4F4",
        bodyBG: "#F9FAFB",
      },
      fontFamily: { custom: ["Montserrat", "sans-serif"] },
    },
  },
  plugins: [],
};
