<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="container is-widescreen">
        <slot name="main"></slot>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from './Footer';

export default {
  components: {
    Footer
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
