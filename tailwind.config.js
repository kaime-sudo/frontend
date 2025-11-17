/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🔹 Couleurs GFI via CSS variables (définies dans @layer base)
        'gfi-primary': 'var(--color-gfi-primary)',
        'gfi-secondary': 'var(--color-gfi-secondary)',
        'gfi-dark': 'var(--color-gfi-dark)',
        'gfi-light': 'var(--color-gfi-light)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}