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
          background:
            "linear-gradient(128deg, rgba(20,50,57,1) 0%, rgba(13,74,73,1) 47%, rgba(2,70,65,1) 100%)",
          color: "#FFFFFFff",
          fontFamily: "Poppins",
          primary: "#34D399",
          secondary: "#115e59",
          accent: "#f3f4f6",
          neutral: "#374151",
          "base-100": "#111827",
          info: "#4d7c0f",
          success: "#15803d",
          warning: "#9a3412",
          error: "#991b1b",
        },
      },
    ],
  },
};
