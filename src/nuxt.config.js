const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  head: {
    title: "Yehor Popov",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Yehor Popov Studio" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto" },
      // { rel: "stylesheet", href: "https://cdn.muicss.com/mui-0.9.35/css/mui.min.css" }
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  loading: {
    color: 'rgba(255,255,255,0.5)',
    height: '5px'
  },
  // mode: "spa",
  plugins: [
    '~/plugins/vuetify.js'
  ],
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/app.styl'
  ],
  buildDir: "../prod/server/nuxt",
  build: {
    publicPath: "/assets/",
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    // extractCSS: true,
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
  // generate: {
  //   routes: [
  //     '/release/va-fantazma',
  //     '/release/va-emptinesses',
  //     '/release/sphingida-origin',
  //   ]
  // }
};
