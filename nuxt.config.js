/* eslint-env node */

const title = 'Coopera.mx #JuntosPodemosLogarlos';
const description = 'Queremos ayudar a nuestros restaurantes locales a tener un medio para hacer preventas o recibir donaciones de manera digital, y así apoyarlos en la crisis.';
const website = 'https://coopera.mx/';
const banner = 'https://coopera.mx/meta-banner.png';

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Primary Meta Tags
      { name: 'title', content: title },
      { hid: 'description', name: 'description', content: description },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: website },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: banner },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: website },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: banner }

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
      const index = routes.findIndex(route => route.name === 'comercio-slug');

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
