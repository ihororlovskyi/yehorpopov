const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  head: {
    // title: "Studio Yehor Popov",
    titleTemplate: '%s | Studio Yehor Popov',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Studio Yehor Popov" }
    ],
    link: [
      { rel: 'shortcut icon', href: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/favi%2Ffavicon-32.png?alt=media&token=a9c4f475-4997-46de-84d0-db23786177dc' },
      { rel: 'apple-touch-icon', href: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/favi%2Ffavicon-144.jpg?alt=media&token=ce62c329-c57c-438d-9910-f9167c8f51c2' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:500,800|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.8.94/css/materialdesignicons.min.css' },
    ]
  },
  loading: {
    color: '#e8ca6a',
    height: '5px'
  },
  // mode: "spa",
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/fireauth.js'
  ],
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/app.styl'
  ],
  // buildDir: "../prod/server/nuxt",
  build: {
    // publicPath: "/assets/",
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue|styl)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    // babel: {
    //   presets: [
    //     'es2015',
    //     'stage-0'
    //   ],
    //   plugins: [
    //     ["transform-runtime", {
    //       "polyfill": true,
    //       "regenerator": true
    //     }],
    //   ]
    // },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  // router: {
  //   mode: 'hash'
  // }
}
