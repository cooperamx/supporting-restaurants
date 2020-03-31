<template>
  <footer>
    <div class="container is-widescreen">
      <div class="columns is-vcentered">
        <div class="column is-one-quarter has-text-left">
          <p><a href="/" class="logo is-size-4 has-text-weight-bold">Coopera.mx</a></p>
        </div>
        <div class="column has-text-right has-text-left-mobile">
          <a class="link is-size-7 is-block-mobile" href="/como-funciona">Cómo funciona</a>
          <a class="link is-size-7 is-block-mobile" href="/terminos-y-condiciones">Términos y condiciones</a>
          <a class="link is-size-7 is-block-mobile" href="/apoyar">Apoya este proyecto</a>
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
