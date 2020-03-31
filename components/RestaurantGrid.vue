<template>
  <div class="container is-widescreen grid">
    <section class="columns is-multiline is-mobile">
      <RestaurantItem
        v-for="(restaurant, index) in items"
        :key="index"
        :name="restaurant.name"
        :image="restaurant.image"
        :location="restaurant.location"
        @click="handlerClick(restaurant.uri)"
      />
    </section>
  </div>
</template>

<script>
import RestaurantItem from "./RestaurantItem.vue";
import { restaurants } from "../libs/dbStatic"

export default {
  name: "ProductGrid",

  components: { RestaurantItem },
  methods: {
    handlerClick(uri) {
      this.$router.push({
        path: `/company?r=${uri}`
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
