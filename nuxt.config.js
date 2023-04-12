export default {
  head: {
    title: 'quiwTest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
      '~/styles/fonts.css'
  ],

  plugins: [
    "~/plugins/$axios",
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],
  env:{
    baseApiUrl: process.env.BASE_API_URL || 'http://localhost:3000'
  },

  modules: [
    "@nuxtjs/axios",
    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],

  build: {
  }
}
