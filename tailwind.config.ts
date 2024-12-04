import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ma_darkBlue: "#13293D",
        ma_blue: "#06789C",
        ma_altBlue: "#81A3BE",
        ma_accent: "#EB6234",
        ma_transBlue: "#f1f5f8",
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      }
    },
  },
  plugins: [],
};
export default config;
