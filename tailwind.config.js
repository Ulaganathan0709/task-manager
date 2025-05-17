/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // ✅ this includes all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
