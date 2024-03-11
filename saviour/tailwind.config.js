/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors:{
      white: '#FFFFFF',
      black: '#191818',
      white2: '#FBF6F6'
    },
    fontFamily:{
      zcool: 'ZCOOL KuaiLe',
      poppins: 'Poppins',
      shojumaru: 'Shojumaru'
    },


    extend: {
      // top: {
      //   '46': '46px',
      // },
      // left: {
      //   '498': '498px',
      // },
      lineHeight:{
        '53': '53.55px',
      },
      fontSize:{
        '45': '45px'
      },
      inset: {
        '27': '27px',
        '88': '88px',
        '56': '56px',
        '198': '198px',
        '46': '46px',
        '498': '498px',
        '54': '54px',
        '1296': '1296px',
        '276': '276px',
        '123': '123px'
        
      },
      borderRadius:{
       '20': '20px',
       '15': '15.44px'
      },
      width:{
       '583': '583px',
       '127': '127px',
       '1262': '1262px',

      },
      height:{
        '38': '38px',
        '108': '108px'
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

