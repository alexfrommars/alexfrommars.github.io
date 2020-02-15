module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-glamor/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-116967778-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-PSGDFDD"},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-sentry/gatsby-browser.js'),
      options: {"plugins":[],"dsn":"https://5810361c02584d38b6c795628dae3e1a@sentry.io/1201814","version":"3.24.2","config":{"release":"0e4fdef81448dcfa0e16ecc4433ff3997aa53572"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.js"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":500},
    }]
