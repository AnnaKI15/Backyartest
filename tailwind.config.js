module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
       lineHeight: {
        '140': '140%', 
      },
       letterSpacing: {
        wider2: '0.02em', 
      },
    },
  },
  plugins: [],
}
