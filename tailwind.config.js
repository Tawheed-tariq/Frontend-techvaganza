/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/hero.png')",
        'about-background':"url('/1.png')",
      },

      colors: {
        'primary': '#64ECC9',
        'secondary': '#EDE7E7',
        'highlightColor': '#64ECC966',
        'eventBorder': '#FFFFFF4D',
        'welcometextColor':'#C8A25D',
        'welcometextAfter':' #504125',
        'introBtnColor':'  #A2834B',
        'grayText':'#7A7A7A',
        'entryDescription':'#1E1403',
      },
      
      borderRadius:{
      '30':'30px',
        'customBrown': '#A2834B'
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 25px rgba(162, 131, 75, 0.8)',
        'glow': '0 4px 30px rgba(162, 131, 75, 0.8), 0 0 30px rgba(162, 131, 75, 0.8)',// Adjust as needed
      },
    
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'averia': ['Averia Serif Libre', 'cursive'],
        'lora': ['roboto', 'serif'],
         'cinzel-deco':['roboto','serif']

      },
      minWidth: {
        '150': '150px', 
      },
    },
    screens: {
      xs:"480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      lg2: "1400px",
      xl: "1600px",
      xl2: "1820px",
    },
  },
  plugins: [],
}
