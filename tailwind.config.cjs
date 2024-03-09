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
          primary: "#15616d",

          secondary: "#FAEDCD",

          accent: "#ff7d00",

          neutral: "#031a19",

          "base-100": "#001524",

          info: "#00a8c1",

          success: "#009923",

          warning: "#906600",

          error: "#ff003a",
        },
        light: {
          primary: "#d4e09b",

          secondary: "#ebd49d",

          accent: "#f19c79",

          neutral: "#031a19",

          "base-100": "#fffdfd",

          info: "#00a8c1",

          success: "#009923",

          warning: "#906600",

          error: "#ff003a",
        },
      },
    ],
  },
};
