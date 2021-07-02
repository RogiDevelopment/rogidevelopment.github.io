/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Jost', 'Helvetica Neue', 'Segoe UI', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#F8FBFF',
          100: '#DDEBFE',
          200: '#A6CAFC',
          300: '#70AAFA',
          400: '#3A8AF8',
          500: '#096BF1',
          600: '#0753BB',
          700: '#053B85',
          800: '#03234F',
          900: '#010B19',
        },
        dark: {
          50: '#2178F5',
          100: '#0B6AF4',
          200: '#0957C8',
          300: '#07449C',
          400: '#053170',
          500: '#031E44',
          600: '#021736',
          700: '#021127',
          800: '#010B18',
          900: '#00040A',
        },
        light: {
          50: '#EEF5FE',
          100: '#DDEBFE',
          200: '#BAD6FC',
          300: '#98C2FB',
          400: '#75ADFA',
          500: '#5399F9',
          600: '#3F8DF8',
          700: '#2C82F7',
          800: '#1876F6',
          900: '#096BF1',
        },
      },
    },
  },
}
