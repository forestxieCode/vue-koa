
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
  render: {
    resourceHints: false,
 },
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/route',
    '~/plugins/echarts',
    '~/plugins/axios.js',
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
    '@nuxtjs/axios','@nuxtjs/proxy'
  ],
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true, // 表示跨域请求时是否需要使用凭证
},
proxy: {
  '/api': {
    target: 'http://localhost:8080', // 目标接口域名
    changeOrigin: true, // 表示是否跨域
    pathRewrite: {
      '^/api': '', // 把 /api 替换成 /
    }
  }
},
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
