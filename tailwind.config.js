export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Assure-toi que tous tes fichiers sont inclus
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")], // RTL plugin
};
