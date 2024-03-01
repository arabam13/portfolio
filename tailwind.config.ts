import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        photoProfileRadius: "0 0 38% 20%",
      },
      gridTemplateColumns: {
        autoFitSM: "repeat(2, minmax(164px,1fr))",
        autoFitMD: "repeat(3, minmax(164px,1fr))",
        autoFitLG: "repeat(4, minmax(164px,1fr))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
