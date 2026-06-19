/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6366F1",
          accent: "#06B6D4",
          dark: "#0F172A",
          card: "#1E293B",
        },
      },
    },
    plugins: [],
  };