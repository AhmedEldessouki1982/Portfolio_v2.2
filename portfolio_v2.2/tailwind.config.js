/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        "fadein": "fadein 10s linear infinite reverse",
        "lighting": "lighting 3s infinite",
        "loading": "loading 1.5s linear infinite"
      },
      keyframes: {
        fadein : {
          "0%": {
            "margin-top": "3.25rem",
          },
          "25%": {
            "margin-top": "0.25rem",
          },
          "50%": {
            "margin-top": "-6.75rem",
          },
          "75%": {
            "margin-top": "-13.75rem",
          },
          "100%": {
            "margin-top": "-16.75rem",
          }
        },
        lighting : {
          "0%" : {
            "text-shadow": "none",
          },
          "50%" : {
            "text-shadow": "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff",
          },
          "100%" : {
            "text-shadow": "none",
          }
        },
        loading: {
          "from": {
            "width": "2.8rem",
            "height": "2.8rem",
            "transform": "rotate(0deg)",
          },
          "to": {
            "width": "2rem",
            "height": "2rem",
            "transform": "rotate(360deg)",
          }
        }
      },
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "navBar": "#1B1B1B",
        "popup": "#000000e1",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('../assets/imgs/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};