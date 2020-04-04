<template>
  <div class="container is-widescreen grid">
    <section class="columns is-multiline is-mobile">
      <RestaurantItem
        v-for="commerce in items"
        :key="commerce.slug"
        :name="commerce.name"
        :image="commerce.image"
        :location="commerce.location"
        @click="handleClick(commerce.slug)"
      />
    </section>
  </div>
</template>

<script>
import RestaurantItem from './RestaurantItem.vue';
import { restaurants } from '../libs/dbStatic';

export default {
  name: 'ProductGrid',
  components: { RestaurantItem },
  methods: {
    handleClick(slug) {
      this.$router.push({
        path: `/${slug}`
      });
    }
  },
  data() {
    return {
      items: restaurants
    };
  }
};
</script>

<style scoped>
.grid {
  margin-top: 4rem;
  margin-bottom: 20rem;
}
</style>
