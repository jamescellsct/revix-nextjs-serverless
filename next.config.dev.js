const withCSS = require('@zeit/next-css');

module.exports = withCSS({});

const API_BASE = '';

module.exports = {
  serverRuntimeConfig: {
    API_BASE
  },
  publicRuntimeConfig: {
    API_BASE
  }
};
