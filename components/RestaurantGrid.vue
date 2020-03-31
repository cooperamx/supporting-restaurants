<template>
  <div class="container is-fluid grid">
    <section class="columns is-multiline is-mobile">
      <RestaurantItem
        v-for="(restaurant, index) in items"
        :key="index"
        :name="restaurant.name"
        :image="restaurant.image"
        :location="restaurant.location"
        @click="handlerClick"
      />
    </section>
  </div>
</template>

<script>
import RestaurantItem from "./RestaurantItem.vue";

export default {
  name: "ProductGrid",

  components: { RestaurantItem },
  methods: {
    handlerClick() {
      this.$router.push({
        path: "/company"
      });
    }
  },
  data() {
    return {
      items: [
        {
          name: "Louie Burger",
          image:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png",
          location: "Guadalajara, Jalisco"
        },
        {
          name: "Louie Burger",
          image:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png",
          location: "Guadalajara, Jalisco"
        },
        {
          name: "Louie Burger",
          image:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png",
          location: "Guadalajara, Jalisco"
        },
        {
          name: "Louie Burger",
          image:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png",
          location: "Guadalajara, Jalisco"
        },
        {
          name: "Louie Burger",
          image:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png",
          location: "Guadalajara, Jalisco"
        },
        {
          name: "Louie Burger",
          image:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png",
          location: "Guadalajara, Jalisco"
        }
      ]
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
