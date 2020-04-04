<template>
  <Layout>
    <div slot="header">
      <CompanyHero
        :name="restaurant.name"
        :address="restaurant.location"
        :website="restaurant.website"
        :logo="restaurant.image"
      >
        <nav-link slot="breadcrumb" :to="{ name: 'index' }">
          <span>&lt; Volver a inicio</span>
        </nav-link>
      </CompanyHero>
    </div>
    <div slot="main">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-4 has-text-weight-bold">Cupones</h2>
        </div>
      </div>
      <div class="columns is-multiline">
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
  </Layout>
</template>

<script>
// comment
import Layout from '../components/Layout';
import CompanyHero from '../components/CompanyHero';
import Coupon from '../components/ui/Coupon';
import NavLink from '../components/ui/Link';
import { restaurants } from '../libs/dbStatic';

export default {
  components: {
    Layout,
    CompanyHero,
    Coupon,
    NavLink
  },
  methods: {
    handlerClick(uri, couponId) {
      this.$router.push({
        name: 'coupon',
        query: {
          r: uri,
          c: couponId
        }
      });
    }
  },
  data() {
    return {
      restaurant: restaurants.find(r => r.uri === this.$route.query.r)
    };
  }
};
</script>
