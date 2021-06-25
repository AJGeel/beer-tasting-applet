module.exports = {
    mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
      extend: {
        colors: {
          'royal-gold': 'hsl(38,40%,60%)',
          'royal-gold-dark': 'hsl(38,30%,20%)',
          'royal-gold-darker': 'hsl(38,30%,10%)',
          'royal-gold-light': 'hsl(38,100%,90%)',
          'royal-gold-lighter': 'hsl(38,18%,96%)',
          'royal-gold-select': 'hsla(38,48%,60%,.2)',
        },
      }
    }
  }
