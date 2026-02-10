
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        onyx: '#0A0A0A',
        accent: 'var(--color-accent)',
        silver: '#C0C0C0',
        'gray-surface': '#1A1A1A',
      },
      fontFamily: {
        heading: ['Tajawal', 'sans-serif'],
        body: ['Tajawal', 'sans-serif'],
        english: ['Alexandria', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      borderRadius: {
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}