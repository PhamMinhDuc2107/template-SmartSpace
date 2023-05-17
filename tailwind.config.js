/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["Dm sans"],
        man: "Manrope",
        robo: "Roboto",
        inter: "Inter",
      },
      colors: {
        orangeff: "#FF9900",
        orangef8: "#F85A47",
        gray31: "#31353B",
        graydd: "#DADADA",
        purple96: "#9672FF",
        blue4d: "#4DDFFD",
        pinkf2: "#F2B8EC",
        whiteGray: "#F1FFFF",
        grayText: "#333333",
      },
    },
  },
  plugins: [],
};
