import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kaiser OFS Brand Colors (extracted from current site)
        primary: {
          DEFAULT: '#2C5372', // Steel Blue
          dark: '#1a3547',
          light: '#5F94B5',
        },
        accent: {
          DEFAULT: '#FF6B35', // Safety Orange
          dark: '#e5522b',
          light: '#ff8c5f',
        },
        environmental: {
          DEFAULT: '#4CAF50', // Eco Green
          dark: '#388e3c',
          light: '#6fbf73',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#E4E7EB',
          200: '#C1C7CF',
          300: '#9DA4AE',
          400: '#767E8C',
          500: '#525A6A',
          600: '#3D4451',
          700: '#2C333E',
          800: '#1F242D',
          900: '#151820',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
