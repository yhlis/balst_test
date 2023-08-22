module.exports = {
    plugins: [
      { src: '~/plugins/nuxt-elementui.js', ssr: false },
    ],  
    axios: {
      proxy: true, // Can be also an object with default options
      prefix: '/api',
<<<<<<< HEAD
      credentials: true
=======
    credentials: true
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    },
    proxy: {
        '/api': {
        changeOrigin: true,
        target: 'http://121.4.12.141:8089', // 允许跨域的服务器地址
        pathRewrite: {
          '^/api': ''
        }
       }
   },
  /*
  ** Headers of the page
  */
  head: {
    title: 'yhl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'yhl的测试' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
<<<<<<< HEAD
    transpile: ["three"],
=======
    transpile: [
      "three"
    ],
>>>>>>> ddf2e0dd9303f152d2dd29acd4faf39b57eaac7a
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

