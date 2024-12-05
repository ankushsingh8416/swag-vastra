/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1814EB",
      },
      boxShadow: {
        custom: "0 4px 8px rgba(0, 0, 0, 0.1)",
        customHover: "0 6px 12px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
