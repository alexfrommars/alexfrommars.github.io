var plugins = [{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-glamor/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"feeds":[{"query":"\n              {\n                allMarkdownRemark {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        summary\n                        date\n                        thumbnail\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml"}]},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-116967778-1"},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-PSGDFDD"},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n\n            allSitePage {\n              edges {\n                node {\n                  path\n                  context {\n                    modifiedDate # デフォルト設定に追加\n                  }\n                }\n              }\n            }\n          }\n        "},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.js"},
    },{
      plugin: require('/Users/alexandra/alexfrommars.github.io/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":500},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
