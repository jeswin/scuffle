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
      yellow: colors.amber,
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
    fontSize: {
      xxs: ".666rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      minWidth: {
        6: "1.5rem",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
};
