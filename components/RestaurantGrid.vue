<template>
  <section class="columns is-multiline">
    <RestaurantItem
      v-for="(restaurant, index) in items"
      :key="index"
      :name="restaurant.name"
      :image="restaurant.image"
      :location="restaurant.location"
    />
    </div>
  </section>
</template>

<script>
import RestaurantItem from './RestaurantItem.vue';

export default {
  name: 'ProductGrid',

  components: { RestaurantItem },

  data: function () {
    return {
      items: [{
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }, {
        name: 'Louie Burger',
        image: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png',
        location: 'Guadalajara, Jalisco'
      }]
    };
  }
};
</script>

<style scoped>
.Grid {
}
</style>
