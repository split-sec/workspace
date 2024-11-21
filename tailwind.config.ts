import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': "#121212",
      'secondary': '#E51058',
      'subtext': '#717274',
      'bright-bg': '#FAFAFA',
      'dull-bg': '#EFEFEF',
      'inactive-button-border': '#DBDBDB',
    },
  },
  plugins: [],
};
export default config;
