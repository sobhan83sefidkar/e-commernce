/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xlmax': {'max': '1535px'},
        'xlmax': {'max': '1279px'},
        'lgmax': {'max': '1000px'},
        'mdmax': {'max': '800px'},
        'smmax': {'max': '650px'},
        'xsmmax' : {"max" : "340px"},
        '2xlmin': {'min': '1535px'},
        'xlmin': {'min': '1279px'},
        'lgmin': {'min': '1023px'},
        'mdmin': {'min': '800px'},
        'smmin': {'min': '639px'},
      },
    },
  },
  plugins: [
    
  ],
}

