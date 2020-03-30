<template>
  <div class="container">
    <div>
      <Header />
      <Grid />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Grid from '~/components/Grid.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Grid,
    Footer
  }
}
</script>

<style>
.container {

}
</style>
