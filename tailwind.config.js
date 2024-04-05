/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      navGlass: { max: "707px" },

  

      phone: "500px",
 
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
        gasteacDark: {
          color: "white",
          fontFamily: "Poppins",
          fontWeight: 700,
          primary: "#164e63",
          secondary: "#115e59",
          accent: "#f3f4f6",
          neutral: "#374151",
          "base-100": "#111827",
          info: "#4d7c0f",
          success: "#15803d",
          warning: "#9a3412",
          error: "#991b1b",
        },
        gasteacLight: {
          color: "black",
          fontFamily: "Poppins",
          fontWeight: 700,
          primary: "#0d9488",
          secondary: "#14b8a6",
          accent: "#111827",
          neutral: "#9ca3af",
          "base-100": "#f3f4f6",
          info: "#bef264",
          success: "#22c55e",
          warning: "#fb923c",
          error: "#ef4444",
        },
      },
    ],
  },
};
