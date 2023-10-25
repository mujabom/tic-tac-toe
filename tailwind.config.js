/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'i-yellow': '0px -0.5rem 0px #CC8B13 inset',
        'i-blue': '0px -0.5rem 0px #118C87 inset',
        'i-yellow-s': '0px -0.25rem 0px #CC8B13 inset',
        'i-blue-s': '0px -0.25rem 0px #6B8997 inset',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'], // Define 'Outfit' as a font-family
      },
      fontSize: {
        'heading-l': ['40px', {
          letterSpacing: '2.5px',
          fontWeight: 'bold',
          lineHeight: '48px',
        }],
        'heading-m': ['24px', {
          letterSpacing: '1.5px',
          fontWeight: 'bold',
          lineHeight: '30px',
        }],
        'heading-s': ['20px', {
          letterSpacing: '1.25px',
          fontWeight: 'bold',
          lineHeight: '24px',
        }],
        'body': ['1.125rem', {
          letterSpacing: '15px',
          fontWeight: 500,
          lineHeight: '30px',
        }],
      },
    
      screens: {
        sm: "450px",
        md: "768px", // Change this to your desired value
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


