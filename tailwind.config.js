/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        kanit :'kanit',
        jost:'jost'
      },
      colors :{
        vert:"#057e2b"
      },
      backgroundImage :{
        repar:"linear-gradient(to top, rgba(0,0,0,0.7) ,rgba(0,0,0,0.7) ),url('../images/repar.jpeg')",
        solo:"linear-gradient(to top, rgba(0,0,0,0.7) ,rgba(0,0,0,0.7) ),url('../images/solorepar.jpg')",
        huilefirst:"linear-gradient(to top, rgba(0,0,0,0.7) ,rgba(0,0,0,0.7) ),url('../images/huilefirst.jpg')"
      },
      keyframes :{
        zoom:{
          '0%,100% ': {
            transform: 'scale(1)'
          },
          '50%':{
             transform: 'scale(1.2)'
          }

          
        },
        wave:{
          '70%':{
            'box-shadow':' rgba(244, 68, 56, 0) 0px 0px 0px 40px'
          },
          '100%':{
            'box-shadow':' rgba(244, 68, 56, 0) 0px 0px 0px 0px'
          }
        },
        vol:{
          '50%':{
            'max-width':' 200px'
          },
          '100%':{
            'box-shadow':' 0px'
          }
        }

      },
      animation :{
        zoom:'zoom 10s infinite',
        wave:'wave 3s ease 0s infinite ',
        wavy:'wave 3s ease 300ms infinite ',
        vol:'vol 2s ease 0s infinite'
      },
      
    },
  },
  plugins: [
  ],
}

