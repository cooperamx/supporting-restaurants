/* eslint-env node */

const title = 'Coopera.mx #JuntosPodemosLogarlos';
const description = 'Queremos ayudar a nuestros restaurantes locales a tener un medio para hacer preventas o recibir donaciones de manera digital, y así apoyarlos en la crisis.';
const website = 'https://coopera.mx/';
const banner = '/meta-banner.png';

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Coopera.mx #JuntosPodemosLogarlos' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // Primary Meta Tags
      { name: 'title', content: title },
      { name: 'description', content: description },
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    ['@nuxtjs/google-gtag', {
      id: 'UA-162434353-1',
      // debug: true
    }],
    ['vue-scrollto/nuxt', { duration: 400 }],
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
    extend (config, ctx) {
    }
  }
}
