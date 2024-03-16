/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#545F7E",
        "light-purple": "#b577f980",
        "dark-pink": "#D97DD9",
        "medium-pink": "#da9cf7",
        "light-pink": "#e1b4fc",
        "navy-blue": "#252E48",
        "navy-blue2": "#050d1f",
        "navy-blue3": "#252d48",

        silver: "#b3b7c8",
        "light-blue": "#b7c7fc",
        "medium-blue": "#2449CD",
        "powder-blue": "#a6bfec",
        "sky-blue": "#c8ddff",
        "serentry-blue": "#CCD7E3",
        "royal-blue": "#1033b6",
        "vivid-blue": "#194ce1",
        "dark-blue": "#021b9f"
      },
      fontSize: {
        // Define fontSizes here
        82: "82px",
        72: "72px",
        64: "64px",
        36: "36px",
        32: "32px",
        30: "30px",
        27: "27px",
        24: "24px",
        22: "22px",
        19: "19px",
        17: "17px",
        18: "18px",
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
