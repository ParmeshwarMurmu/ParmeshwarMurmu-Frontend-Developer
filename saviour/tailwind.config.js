/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors:{
      white: '#FFFFFF',
      black: '#191818'
    },
    fontFamily:{
      zcool: 'ZCOOL KuaiLe',
    },

    extend: {
      // top: {
      //   '46': '46px',
      // },
      // left: {
      //   '498': '498px',
      // },
      inset: {
        '27': '27px',
        '88': '88px',
        '56': '56px',
        '198': '198px',
        '46': '46px',
        '498': '498px',
        
      },
      borderRadius:{
       '20': '20px'
      },
      width:{
       '583': '583px'
      },
      spacing: {
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        // Add more custom spacing values as needed
      },
      margin: {
        '2px': '2px',
        '3px': '3px',
        '498px': '498px'
      },
      padding: {
        '2px': '2px',
        '3px': '3px',
        // Add more custom padding values as needed
      },

    },
  },
  plugins: [],
}

