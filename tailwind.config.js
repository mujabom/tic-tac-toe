/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "10px 10px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: "450px",
        md: "768px", // Change this to your desired value
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        primary: {
          DEFAULT: "hsl(4, 100%, 67%)",
        },
        neutral: {
          DEFAULT: "hsl(234, 29%, 20%)",
          dark: "hsl(235, 18%, 26%)",
          grey: "hsl(231, 7%, 60%)",
          white: "hsl(0, 0%, 100%)",
        },

        
      },
    },
  },
  plugins: [],
};

