import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#e8eaf0',
          100: '#c5c9d6',
          200: '#9da3b8',
          300: '#747d9a',
          400: '#565f83',
          500: '#38416c',
          600: '#323b64',
          700: '#2b3259',
          800: '#141829',
          900: '#0d1017',
          950: '#080a10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
