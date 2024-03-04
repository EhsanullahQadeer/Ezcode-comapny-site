/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#545F7E",
        "light-purple": "#b577f980",
        darkpink: "#FF39A7",
        "medium-pink": "#da9cf7",
        "light-pink": "#e1b4fc",
        "navy-blue": "#252E48",
        "navy-blue2": "#050d1f"
      },
      fontSize: {
        // Define fontSizes here
        64: "64px",
        32: "32px",
        30: "30px",
        24: "24px",
        22: "22px",
        19: "19px",
        17: "17px",
        16: "16px",
        15: "15px",
        14: "14px",
        13: "13px",
        12: "12px",
        11: "11px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
