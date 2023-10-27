/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "i-yellow": "0px -0.5rem 0px #CC8B13 inset",
        "i-blue": "0px -0.5rem 0px #118C87 inset",
        "i-navy": "0px -0.5rem 0px #10212A inset",
        "i-navy-s": "0px -0.25rem 0px #10212A inset",
        "i-yellow-s": "0px -0.25rem 0px #CC8B13 inset",
        "i-blue-s": "0px -0.25rem 0px #6B8997 inset",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Define 'Outfit' as a font-family
      },
      fontSize: {
        "heading-l": [
          "2.5rem",
          {
            letterSpacing: "0.15625rem",
            fontWeight: 700,
            lineHeight: "3rem",
          },
        ],
        "heading-m": [
          "1.5rem",
          {
            letterSpacing: "0.09375rem",
            fontWeight: 700,
            lineHeight: "1.875rem",
          },
        ],
        "heading-s": [
          "1.25rem",
          {
            letterSpacing: "0.078125rem",
            fontWeight: 700,
            lineHeight: "1.5rem",
          },
        ],
        "heading-xs": [
          "1rem",
          {
            letterSpacing: "0.0625rem",
            fontWeight: 700,
            lineHeight: "1.25rem",
          },
        ],
        body: [
          "0.875rem",
          {
            letterSpacing: "0.05rem",
            fontWeight: 400,
            lineHeight: "1.875rem",
          },
        ],
      },

      screens: {
        sm: "450px",
        md: "450px", // Change this to your desired value
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        "cd-navy": "#1A2A33",
        "cl-blue": "#31C3BD",
        "cl-blue-h": "#65E9E4",
        "cl-silver-h": "#DBE8ED",
        "cl-silver": "#A8BFC9",
        "cd-semi-navy": "#1F3641",
        "cl-yellow-h": "#FFC860",
        "cl-yellow": "#F2B137",
      },
    },
  },
  plugins: [],
};
