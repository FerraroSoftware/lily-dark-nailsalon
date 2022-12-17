/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yell100: "#FFFAEB",
        yell200: "#FCEFC7",
        yell300: "#F8E3A3",
        yell400: "#F9DA8B",
        yell500: "#F7D070",
        yell600: "#E9B949",
        yell700: "#C99A2E",
        yell800: "#A27C1A",
        yell900: "#7C5E10",
        yell1000: "#513C06",
        dark100: "#F7F7F7",
        dark200: "#E1E1E1",
        dark300: "#CFCFCF",
        dark400: "#B1B1B1",
        dark500: "#9E9E9E",
        dark600: "#7E7E7E",
        dark700: "#626262",
        dark800: "#515151",
        dark900: "#3B3B3B",
        dark1000: "#222222",
      },
    },
  },
  plugins: [],
};
