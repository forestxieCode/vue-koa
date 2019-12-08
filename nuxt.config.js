
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'forest后台管理系统' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'origan' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
    '~/assets/css/font/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/route',
    '~/plugins/echarts',
    '~/plugins/animationplugins',
    '~/plugins/i18n.js'
  ],
  generate: {
    routes: ['/', '/workplace', '/zh-CN', '/zh-CN/workplace']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
