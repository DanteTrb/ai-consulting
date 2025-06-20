module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      dropShadow: {
        purple: '0 0 10px rgba(164,89,255,0.6)',
      },
      colors: {
        tooltipBg: '#ffffff',
        tooltipText: '#000000',
        tooltipBorder: 'rgba(165, 89, 255, 0.4)'
      }
    },
  },
  plugins: [],
}