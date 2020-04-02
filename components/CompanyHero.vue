<template>
  <section
    v-bind:class="{
      hero: true,
      'hero--compact': compact
    }"
  >
    <div class="hero-body">
      <div class="container is-widescreen">
        <Header />
        <span class="breadcrumb-container">
          <slot name="breadcrumb"></slot>
        </span>
        <div class="section company-info columns is-vcentered is-mobile">
          <div class="column is-narrow">
            <figure class="image is-96x96">
              <img :src="logo" />
            </figure>
          </div>
          <div class="column is-text-left">
            <h1 class="is-size-3 has-text-weight-bold">{{ name }}</h1>
            <p class="is-size-7">{{ address }}</p>
            <nav-link :href="website">
              <span>Visitar sitio web</span>
            </nav-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './ui/Header';
import NavLink from './ui/Link';

export default {
  components: {
    Header,
    NavLink
  },
  props: {
    name: String,
    address: String,
    website: String,
    logo: String,
    compact: Boolean
  }
};
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

.hero
  background-color: var(--head-bg)
  color: var(--main-text)
  height: 17rem
  overflow: hidden
  &--compact
    height: 8rem

.hero-body
  padding: 1rem

.section
  padding: 1.5rem 0

.company-info
  color: #3E3E3E

.image
  border: solid 0.25rem white
  border-radius: 0.25rem

.breadcrumb-container
  padding-left: 0;

+desktop()
  .hero--compact
      height: 9.5rem

  .hero-body
    padding: 1rem 1rem 1.5rem 1rem

  .section
    padding: 1.5rem 1.5rem 1.5rem 1.5rem

  .breadcrumb-container
    padding-left: 1.5rem;
</style>
