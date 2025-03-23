/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public sans", "Poppins", "Barlow", "Helvetica"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#f3e8dc",
        foreground: "#3a1f0f",
        card: {
          DEFAULT: "#d4ae87",
          foreground: "#683b1d",
        },
        popover: {
          DEFAULT: "#e0c3a3",
          foreground: "#5a3216",
        },
        primary: {
          DEFAULT: "#d4ae87",
          foreground: "#683b1d",
        },
        secondary: {
          DEFAULT: "#b98d65",
          foreground: "#4f2d12",
        },
        accent: {
          DEFAULT: "#e0c3a3",
          foreground: "#5a3216",
        },
        muted: {
          DEFAULT: "#c4a78a",
          foreground: "#5e3a20",
        },
        destructive: {
          DEFAULT: "#a04e2d",
          foreground: "#fff2e5",
        },
        border: "#9e7b5b",
        input: "#d1b89b",
        ring: "#b07c5a",
        chart: {
          1: "#d4ae87",
          2: "#b98d65",
          3: "#a07353",
          4: "#875b3f",
          5: "#683b1d",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
