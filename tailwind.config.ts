import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondaryBackground: "var(--secondary-background)",
        secondaryForeground: "var(--secondary-foreground)",
        tertiaryBackground: "var(--tertiary-background)",
        tertiaryForeground: "var(--tertiary-foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
