/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors:{
      white: '#FFFFFF',
      black: '#191818',
      white2: '#FBF6F6',
      red: '#ED0137',
      textWhite: '#FFFCFD',
      eventText: '#E6E3E3',
      eventPercent: '#DF180A',
      presaleText: '#F5F1F1',
      presaleText2: '#F0F0F0',
      inputBorder: '#C4110C',
      placeholderColor: '#EDEBEB'
    },
    fontFamily:{
      zcool: 'ZCOOL KuaiLe',
      poppins: 'Poppins',
      shojumaru: 'Shojumaru'
    },

    borderWidth:{
      '1': '1px',
      '5': '1px'
    },


    extend: {
      opacity:{
         '48': '48%'
      },

      lineHeight:{
        '53': '53.55px',
        '28': '28.56px',
        '20': '20.03px',
        '54': '54.19px',
        '36': '36.51px',
        '23': '23.84px',
        '21': '20px',
        '63': '63.56px',
        '32': '32px',
        '24': '24px',
        '17': '17.03px',
        '14': '14.08px',
        '37': '37.08px',
        '16': '16px'

      },
      fontSize:{
        '45': '45px',
        '44': '44px',
        '24': '24px',
        '20': '20.03px',
        '40': '40.92px',
        '21': '20.92px',
        '18': '18px',
        '19': '20px',
        '48': '48px',
        '32': '32px',
        '17': '17.03px',
        '14': '14.08px',
        '28': '28px',
        '16': '16px'


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
        '123': '123px',
        '677': '677px',
        '163': '163px',
        '753': '753px',
        '166': '166px',
        '511': '511px',
        '723': '723px',
        '1048': '1048px',
        '1210': '1210px',
        '1272': '1272px',
        '344': '344px',
        '1385': '1385px',
        '80': '80px',
        '1520': '1520px',
        '229': '229px',
        '1543': '1543px',
        '288': '288px',
        '1562': '1562.27px',
        '151': '151px',
        '1626': '1626.27px',
        '210': '210px',
        '1624': '1624.27px',
        '399': '399px',
        '1692': '1692.27px',
        '1441': '1441px',
        '1981': '1981px',
        '286': '286px',
        '2056': '2056px',
        '72': '72px',
        '2160': '2160px',
        '111': '111px'

        
        
        
      },
      borderRadius:{
       '20': '20px',
       '15': '15.44px',
       '21': '21.92px',
       '16': '16.21px'
      },
      width:{
       '583': '583px',
       '127': '127px',
       '1262': '1262px',
       '587': '587px',
       '795': '795px',
       '178': '178px',
       '109': '109px',
       '1512': '1512px',
       '823': '823px',
       '539': '539px',
       '244': '244px',
       '125': '125px',
       '412': '412px',
       '176': '176px',
       '39': '39px',
       '94': '94px',
       '89': '89px',
       '155': '155px',
       '152': '152px',
       '146': '146px',
       '57': '57px',
       '388': '388px',
       '26': '26px',
       '27': '27px',
       '708': '708px',
       '312': '312px',
       '376': '376px',
       '467': '467px',
       '438': '438px',
       '73': '73.58px',
       '31': '31px',
       '131': '131.58px',
       '138': '138.49px',
       '107': '107px',
       '547': '547px',
       '239': '239px',
       '100': '100px'

       
       

       



      },
      height:{
        '38': '38px',
        '108': '108px',
        '795': '795px',
        '207': '207px',
        '54': '54.06px',
        '1145': '1145px',
        '55': '54px',
        '111': '111px',
        '70': '70px',
        '24': '24px',
        '382': '382px',
        '40': '40px',
        '20': '20px',
        '622': '622px',
        '738': '738px',
        '64': '64px',
        '240': '240px',
        '48': '48px',
        '45': '45px',
        '17': '17px',
        '39': '39.2px',
        '14': '14px',
        '74': '74px',
        '16': '16px',
        '42': '42px'
        

        

      },

      spacing: {
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        // Add more custom spacing values as needed
      },
      margin: {
        '498px': '498px',
        '23': '23px',
        '60': '60px',
        '64': '64px',
        '59': '59px',
        '62': '62px',
        '248': '248px',
        '125': '125px',
        '26': '26px',
        '46': '46px',
        '45': '45px',
        '34': '25px',
        '37': '37px',
        '24': '24px',
        '43': '30px',
        '13': '13px',
        '14': '26px',
        '72': '72px',
        '198': '198px',
        '32': '32px',
        '170': '170px',
        '40': '40px',
        '166': '166px',
        '120': '120px',
        '135': '135px',
        '19': '19px',
        '237': '237px',
        '33': '32.42px',
        '12': '12.6px',
        '15': '15.75px',
        '30': '30px',
        '111': '111px',
        '16': '16px',
        '20': '20px',
        '106': '106px'
        

      },
      padding: {
        '2px': '2px',
        '3px': '3px',
        '17': '17.03px',
        '21': '21.29px',
        '14': '14px',
        '12': '12.6px',
        '15': '15.75px'
        
        // Add more custom padding values as needed
      },

    },
  },
  plugins: [],
}

