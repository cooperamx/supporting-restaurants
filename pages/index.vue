<template>
  <div class="__container">
    <div>
      <Header />
      <RestaurantGrid />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import RestaurantGrid from '~/components/RestaurantGrid.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    RestaurantGrid,
    Footer
  }
}
</script>

<style>
.__container {

}
</style>
