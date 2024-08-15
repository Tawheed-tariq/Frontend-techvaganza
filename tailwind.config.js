/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/public/hero.png')",
        'about-background':"url('/public/1.png')",
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
      xl: "1700px",
    },
  },
  plugins: [],
}
