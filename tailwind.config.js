/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gradient: {
          from: "#17EAD9",
          to: "#6078EA",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
