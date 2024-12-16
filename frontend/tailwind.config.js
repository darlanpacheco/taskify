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
          dark: "#151515",
        },
        tertiary: {
          DEFAULT: "#efefef",
          dark: "#212121",
        },
        green: {
          DEFAULT: "#e5ff00",
        },
        blue: {
          DEFAULT: "#75bbff",
          light: "#bbeeff",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
