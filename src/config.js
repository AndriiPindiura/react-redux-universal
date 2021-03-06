require('babel-polyfill');

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

// export const mongo = {
//   uri: 'mongodb://localhost/bemy',
// };


module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  mongo: {
    uri: 'mongodb://localhost/bemy',
  },
  app: {
    title: 'Bemy',
    description: 'Harmony.',
    head: {
      titleTemplate: 'Bemy: %s',
      meta: [
        { name: 'description', content: 'Harmony.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Bemy' },
        { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Bemy' },
        { property: 'og:description', content: 'All the modern best practices in one example.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@erikras' },
        { property: 'og:creator', content: '@erikras' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
      ],
    },
  },

}, environment);
