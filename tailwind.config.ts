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
        navy: {
          50: '#e6e7eb',
          100: '#c0c3cc',
          200: '#969bab',
          300: '#6c7389',
          400: '#4d5570',
          500: '#2d3757',
          600: '#28314f',
          700: '#222a46',
          800: '#1c233c',
          900: '#1a1f36',
          950: '#0d1020',
        },
        coral: {
          50: '#fef0eb',
          100: '#fdd8cc',
          200: '#f9b09a',
          300: '#f58967',
          400: '#f26f45',
          500: '#EF5E33',
          600: '#e0502a',
          700: '#c44022',
          800: '#a8351b',
          900: '#8c2a14',
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
