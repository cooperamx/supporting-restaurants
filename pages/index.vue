<template>
  <Layout>
    <div slot="header">
      <Header />
    </div>
    <div slot="main">
      <RestaurantGrid />
    </div>
  </Layout>
</template>

<script>
import Layout from '~/components/Layout.vue';
import Header from '~/components/Header.vue';
import RestaurantGrid from '~/components/RestaurantGrid.vue';

export default {
  components: {
    Layout,
    Header,
    RestaurantGrid
  }
};
</script>
