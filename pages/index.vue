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
:root {
  --main-bg: #FFFFFF;
  --head-bg: #FFF0C6;
  --primary: #FF5757;
  --main-text: #0B0E1C;
  --grid-bg: #DAEF82;
}

.__container {

}
</style>
