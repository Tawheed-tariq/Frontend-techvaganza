/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {

      },

      colors: {
         customBrown: '#A2834B',
        gray: {
          light: '#E5E5E5',
          DEFAULT: '#3C4857',
          dark: '#888',
          
        },
      
      },
      
      borderRadius:{
      customBrown: '#A2834B'
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 25px rgba(162, 131, 75, 0.8)',
        'glow': '0 4px 30px rgba(162, 131, 75, 0.8), 0 0 30px rgba(162, 131, 75, 0.8)',// Adjust as needed
      },
    
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        averia: ['Averia Serif Libre', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'card-default': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        'card-raised': '0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      transitionProperty: {
        transform: 'transform',
      },
      transitionDuration: {
        '200': '200ms',
        'playfair': ['Playfair Display', 'serif'],
        'averia': ['Averia Serif Libre', 'cursive'],
        'lora': ['roboto', 'serif'],
         'cinzel-deco':['roboto','serif']

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
