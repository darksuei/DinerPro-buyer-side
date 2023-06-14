/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components_seller/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        "3xl": "0px 5px 20px rgba(0, 0, 0, 0.2)",
        "4xl": "0px 5px 20px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        "Text-green": "#6BAF71",
        backdrop: "rgba(12, 12, 12, 0.33)",
        genBg: "rgb(207, 215, 223)",
      },
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Kaushan: ["Kaushan Script", "cursive"],
        Sacramento: ["Sacramento", "cursive"],
        Fredoka: ["Fredoka One", "cursive"],
        Baloo: ["Baloo Tamma 2", "cursive"],
        Kalam: ["Kalam", "cursive"],
        comic: ["Comic Neue", "cursive"],
      },
      backgroundImage: {
        roadmapbg: "url('/roadmap.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
