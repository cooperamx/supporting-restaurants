export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Coopera.mx - Juntos podemos!' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/main.scss', lang: 'scss' }],

  /*
   ** Routing
   */
  router: {
    extendRoutes(routes, resolve) {
      const index = routes.findIndex(route => route.path === '/:commerce');

      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          commerceHeader: resolve(__dirname, 'components/CommerceHeader.vue')
        },
        chunkNames: {
          commerceHeader: 'components/CommerceHeader'
        }
      };
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-162434353-1'
        // debug: true
      }
    ],
    ['vue-scrollto/nuxt', { duration: 400 }]
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {}
  }
};
