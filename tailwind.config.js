/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      plugins: [require("@tailwindcss/line-clamp")],
      boxShadow: {
        custom: "0px 10px 25px 0px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#4C67D9",
        secondary: "#654d3c",
        background: "#c69d4d",
        textCont: "#654d3c",
        text: "#c69d4d",
        text2: "#afa39a",
        bgIcon: "#c59c4c",
        iconHover: "#654d3c",
        smText: "#afa39a",
        white: "#ffffff",
        subtitle: "rgb(161, 161, 170)",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.6s ease-out",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
