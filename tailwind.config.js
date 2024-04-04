/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      navGlass: { max: "707px" },
      400: { max: "400px" },
      tablet: "708px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cyberpunk: {
          ...require("daisyui/src/theming/themes")["cyberpunk"],
          fontFamily: "Cyberpunk",
          backgroundColor: "#fff44c",
          secondary: "#f6d860",
          ".toggle": {
            "border-radius": "100px",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          fontFamily: "Dark",
          secondary: "#4B4A54",
          backgroundColor: "black",
        },
      },
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
