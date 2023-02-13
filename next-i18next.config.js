const path = require('path')
const locales = require('./locales')

const config = {
  i18n: {
    defaultLocale: 'en',
    locales: locales,
    localeDetection: false,
  }
 }

module.exports = config
