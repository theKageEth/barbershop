/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#00e1d3",

          secondary: "#fffed8",

          accent: "#00dfd4",

          neutral: "#1c222b",

          "base-100": "#2d272a",

          info: "#00a7ff",

          success: "#00a734",

          warning: "#c06400",

          error: "#d1003e",
        },
        light: {
          primary: "#22d3ee",

          secondary: "#292524",

          accent: "#008800",

          neutral: "#0b0b0b",

          "base-100": "#fffed8",

          info: "#0e77ff",

          success: "#00c89b",

          warning: "#ca7200",

          error: "#ff99a9",
        },
      },
    ],
  },
};
