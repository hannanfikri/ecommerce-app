/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        "inter-thin": "100",
        "inter-extralight": "200",
        "inter-light": "300",
        "inter-normal": "400",
        "inter-medium": "500",
        "inter-semibold": "600",
        "inter-bold": "700",
        "inter-extrabold": "800",
        "inter-black": "900",
      },
    },
  },
  plugins: [],
};
