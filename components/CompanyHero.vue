<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container is-widescreen">
        <Header />
        <div class="section">
          <Link label="< Volver a inicio" href="/" />
        </div>
        <div class="section company-info columns is-mobile">
          <div class="column is-narrow">
            <figure class="image is-96x96">
              <img :src="logo">
            </figure>
          </div>
          <div class="column is-text-left">
            <h1 class="is-size-3 has-text-weight-bold">{{ name }}</h1>
            <p class="is-size-7">{{ address }}</p>
            <Link label="Visitar sitio web" :href="website" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './ui/Header';
import Link from './ui/Link';
import Buttom from './ui/Buttom';

export default {
  components: {
    Header,
    Link,
    Buttom
  },
  props: {
    name: String,
    address: String,
    website: String,
    logo: String,
  },
};
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

.hero
  background-color: var(--head-bg)
  color: var(--main-text)
  height: 17rem

.hero-body
  padding: 1rem 1rem 2rem 1rem

.section
  padding: 0 0 1.5rem 0

.company-info
  color: #3E3E3E

.image
  border: solid 0.25rem white
  border-radius: 0.25rem

.link
  color: var(--primary)

+desktop()
  .section
    padding: 0 1.5rem 1.5rem 1.5rem
</style>
