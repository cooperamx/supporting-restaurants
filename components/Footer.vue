<template>
  <footer>
    <div class="container is-widescreen">
      <div class="columns is-vcentered">
        <div class="column is-one-quarter has-text-left">
          <p>
            <a href="/" class="logo is-size-4 has-text-weight-bold">
              Coopera.mx
            </a>
          </p>
        </div>
        <div class="column has-text-right has-text-left-mobile">
          <nuxt-link class="link is-size-7 is-block-mobile" to="/acerca-de">
            Acerca de
          </nuxt-link>
          <nuxt-link class="link is-size-7 is-block-mobile" to="/como-funciona">
            Cómo funciona
          </nuxt-link>
          <nuxt-link
            class="link is-size-7 is-block-mobile"
            to="/terminos-y-condiciones"
          >
            Términos y condiciones
          </nuxt-link>
          <nuxt-link class="link is-size-7 is-block-mobile" to="/apoyar">
            Apoya este proyecto
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

footer
  --link: #7E7E7E
  --border-color: #E5E5E5
  border-top: 1px solid var(--border-color)
  padding: 24px

.logo
  color: var(--primary)

.link
  color: var(--link)
  margin-bottom: 16px

+desktop()
  footer
    padding: 32px
  .link
    margin-left: 24px
    margin-bottom: 0
</style>
