module.exports = {
  // mode: "jit",

  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "texture-light": "url('/src/img/background2.png')",
        "texture-dark": "url('/src/img/background.png')",
      },
      colors: {
        paper: "#F7F4EF",
      },
    },
    fontFamily: {
      sans: "Alegreya, Arial, sans-serif",
    },
  },
  plugins: [],
};

// TODO: change tailwind to default to serif font, put PTSerif in that
