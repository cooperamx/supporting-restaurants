<template>
  <div class="__container">
    <div>
      <CompanyHero
        :name="restaurant.name"
        :address="restaurant.location"
        :website="restaurant.website"
        :logo="restaurant.image"
      />
      <div class="container is-widescreen">
        <div class="__list columns is-multiline">
          <Coupon
            v-for="(coupon, index) in restaurant.coupons"
            :key="index"
            :title="coupon.title"
            :body="coupon.body"
            class="column is-one-third-desktop is-half-tablet is-full-mobile"
            @click="handlerClick(restaurant.uri, index)"
          />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import CompanyHero from "../components/CompanyHero";
import Coupon from "../components/ui/Coupon";
import Footer from "../components/Footer";
import { restaurants } from "../libs/dbStatic";

export default {
  components: {
    CompanyHero,
    Coupon,
    Footer
  },
  methods: {
    handlerClick(uri, couponId) {
      console.warn(uri);

      this.$router.push({
        path: `/coupon`,
        query: {
          r: uri,
          c: couponId
        }
      });
    }
  },
  data () {
    return {
      restaurant: restaurants.find(r => r.uri === this.$route.query.r)
    }
  }
};
</script>

<style scoped>
.__container {
  position: relative;
}

.__list {
  padding: 2rem;
}

.asd {
  background-color: red;
}
</style>
