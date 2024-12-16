/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#cccccc",
          dark: "#0f0f0f",
        },
        secondary: {
          DEFAULT: "#dedede",
          dark: "#161616",
        },
        tertiary: {
          DEFAULT: "#efefef",
          dark: "#242424",
        },
        quaternary: {
          DEFAULT: "#efefef",
          dark: "#323232",
        },
        green: {
          DEFAULT: "#e5ff00",
        },
        purple: {
          DEFAULT: "#bbaaff",
          light: "#eeddff",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
