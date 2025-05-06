/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #1d1e22, rgba(29, 30, 34, 0.9))",
        "custom-gradient-2": "linear-gradient(to left, #3b82f6, #f43f5e)",
        "card-gradient": "linear-gradient(to right,rgba(243, 107, 62, 0.07),rgba(255, 161, 130, 0.04))",
        "back-gradient": "linear-gradient(to right,rgba(243, 107, 62, 0.07),rgba(255, 161, 130, 0.04))",
        "custom-gradient3": "linear-gradient(to right,rgba(29, 30, 34, 0.06), rgba(29, 30, 34, 0.05))",

      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#f36a3e",
        linkColor: "#2a5bd7",
        headColor: '#1d1e22',
        blueCol: '#3b82f6'
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"]
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};






// Botton colors - #f36a3e
// card bg color - 