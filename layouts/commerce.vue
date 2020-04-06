<template>
  <div>
    <header>
      <nuxt-child
        name="commerceHeader"
        :commerceName="commerce.name"
        :address="commerce.location"
        :website="commerce.website"
        :logo="commerce.image"
        link="/"
      >
      </nuxt-child>
    </header>
    <main>
      <div class="container is-widescreen">
        <nuxt></nuxt>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '../components/Footer';
import { restaurants } from '../libs/dbStatic';

export default {
  components: {
    Footer
  },
  data() {
    const commerce = restaurants.find(r => r.slug === this.$route.params.slug);
    if (!commerce) this.$router.replace('/');
    return {
      commerce
    };
  }
};
</script>

<style lang="sass">
@import '~bulma/sass/utilities/_all'

main
  padding: 2rem 1rem
  +desktop()
    padding: 2rem
</style>
