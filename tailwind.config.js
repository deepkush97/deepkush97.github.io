const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity =
  (rgbValue) =>
  ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(${rgbValue},${opacityValue})`
      : `rgb(${rgbValue})`;

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
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
      fontFamily: {
        sans: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        light: {
          DEFAULT: withOpacity("136,146,176"),
          50: withOpacity("233,234,240"),
          100: withOpacity("222,225,233"),
          200: withOpacity("200,205,219"),
          300: withOpacity("179,185,204"), //light
          400: withOpacity("157,166,190"),
          500: withOpacity("136,146,176"), //base
          600: withOpacity("105,118,156"), //dark
          700: withOpacity("84,94,126"),
          800: withOpacity("63,71,96"),
          900: withOpacity("43,49,65"),
        },
        dark: {
          DEFAULT: withOpacity("10,25,47"),
          50: withOpacity("90,142,220"),
          100: withOpacity("67,127,215"),
          200: withOpacity("40,99,186"),
          300: withOpacity("30,74,140"), //light
          400: withOpacity("20,50,93"),
          500: withOpacity("10,25,47"), //base
          600: withOpacity("7,18,34"),
          700: withOpacity("5,12,22"), //dark
          800: withOpacity("2,5,9"),
          900: withOpacity("0,0,0"),
        },
        aquamarine: {
          50: withOpacity("247,255,253"),
          100: withOpacity("240,255,251"),
          200: withOpacity("216,255,246"),
          300: withOpacity("193,255,240"),
          400: withOpacity("147,255,229"),
          500: withOpacity("100,255,218"),
          600: withOpacity("90,230,196"),
          700: withOpacity("75,191,164"),
          800: withOpacity("60,153,131"),
          900: withOpacity("49,125,107"),
        },
      },
      height: {
        1.5: "0.375rem",
        "85v": "85vh",
        "80v": "80vh",
        "75v": "75vh",
        "70v": "70vh",
        "60v": "60vh",
      },
      minHeight: {
        1.5: "0.375rem",
        "85v": "85vh",
        "80v": "80vh",
        "75v": "75vh",
        "70v": "70vh",
        "60v": "60vh",
      },
      maxHeight: {
        1.5: "0.375rem",
        "85v": "85vh",
        "80v": "80vh",
        "75v": "75vh",
        "70v": "70vh",
        "60v": "60vh",
      },
      width: {
        1.5: "0.375rem",
      },
      minWidth: {
        1.5: "0.375rem",
      },
      maxWidth: {
        1.5: "0.375rem",
      },
    },
  },
  plugins: [],
};
