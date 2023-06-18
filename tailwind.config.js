/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["animate-[fade-in-left_1s_ease-in-out]"],
  theme: {
    extend: {
      colors: {
        gray: "#9f9f9f",
        graydark: "#666363",
        graylight: "#f7f7f7",
        blue: "#397ac4",
        purple: "#940797",
        pink: "#ff49db",
        black: "#292944",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        noto: ["Noto Serif", "serif"],
        mulish: ["Mulish", "serif"],
        robotocondensed: ["Roboto Condensed", "sans-serif"],
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        lato: ["Lato", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [Myclass],
};
