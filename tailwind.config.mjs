/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#36a5d6',
          dark: '#078dc8',
          light: '#5bb8e0',
        },
        navy: {
          DEFAULT: '#333333',
          dark: '#1a1a1a',
          light: '#444444',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
