const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.tsx"] },
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      black: colors.black,
      cyan: colors.cyan,
      orange: colors.orange,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      current: "currentColor",
    },
    boxShadow: {
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
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
