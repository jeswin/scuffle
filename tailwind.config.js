const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.tsx"] },
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      red: colors.rose,
      blue: colors.blue,
      green: colors.green,
      violet: colors.fuchsia,
      black: colors.black,
      cyan: colors.cyan,
      orange: colors.orange,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      current: "currentColor",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
