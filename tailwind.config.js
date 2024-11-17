/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redBg: "#fd5d40",
        lightRedBg: "#fd6048",
        lightRedBgSecond: "#ff6752",
        buttonBlue:"#4487FF",
        registerBlue:"#015F91",
        registerGray:"#A4AFB7"
      },
      clipPath: {
        wave: "polygon(0 70%, 50% 100%, 100% 70%, 100% 100%, 0 100%)",
      },
      boxShadow: {
        custom: "2px 3px 4px #00000029",
      },
    },
  },
  plugins: [],
};
