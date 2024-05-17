import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors:{
        customTitleColor: '#FEF7EE',
        customSubTitleColor: '#6F757C',
        customBG: '#111315',
        customBG2: '#1B1D1F',
        customButtomColor:'#6F757C',
        customBgGreen:'#BEE3CC',
        customTextDanger:'#ED735D',
        customPopularColor:'#F6C768'
      }
    },
  },
  plugins: [],
};
export default config;
