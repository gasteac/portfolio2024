/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    screens: {
      navGlass: { max: "707px" },
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
          secondary: "#f6d860",
          ".toggle": {
            "border-radius": "100px",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          fontFamily:"Dark",
          secondary: "#4B4A54",
        },
      },
    ],
  },
};
