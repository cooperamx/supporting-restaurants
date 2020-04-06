<template>
  <div>
    <div class="columns" v-if="this.$route.params.coupon">
      <nuxt-child></nuxt-child>
    </div>

    <div v-else>
      <div class="columns">
        <div class="column">
          <h2 class="is-size-4 has-text-weight-bold">Cupones</h2>
        </div>
      </div>
      <div class="columns is-multiline">
        <Coupon
          v-for="coupon in commerce.coupons"
          :key="coupon.id"
          :title="coupon.title"
          :body="coupon.body"
          @click="handleCouponClick(coupon.id)"
          class="column is-one-third-desktop is-half-tablet is-full-mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Coupon from '~/components/ui/Coupon';
import { restaurants } from '~/libs/dbStatic';

export default {
  layout: 'commerce',
  components: {
    Coupon
  },
  methods: {
    handleCouponClick(couponId) {
      console.info(couponId);
      this.$router.push({
        name: 'comercio-slug-coupon',
        params: {
          slug: this.$route.params.slug,
          coupon: couponId
        }
      });
    }
  },
  data() {
    const commerce = restaurants.find(r => r.slug === this.$route.params.slug);
    if (!commerce) this.$router.replace('/');
    return {
      commerce
    };
  }
};
</script>
