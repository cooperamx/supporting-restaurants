<template>
  <Layout>
    <div slot="header">
      <CompanyHero
        :name="restaurant.name"
        :address="restaurant.location"
        :website="restaurant.website"
        :logo="restaurant.image"
      />
    </div>
    <div slot="main">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-3 has-text-weight-bold">¡Estás a un paso de obtener tu cupón! 🤩</h2>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-half">
          <Coupon :title="coupon.title" :body="coupon.body" />

          <FromCoupon @click="handleClick" />
        </div>
        <div class="column is-half is-hidden-touch">
          <img src="../assets/coupons.png" alt="coupons" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Buttom from "../components/ui/Buttom";
import CompanyHero from "../components/CompanyHero";
import Coupon from "../components/ui/Coupon";
import FromCoupon from "../components/FromCoupon";
import { sentWhatsappMessage } from "../libs/utils";
import { restaurants } from "../libs/dbStatic";

export default {
  components: {
    Layout,
    Buttom,
    CompanyHero,
    Coupon,
    FromCoupon
  },
  methods: {
    handleClick() {
      sentWhatsappMessage(
        this.restaurant.phone,
        this.restaurant.coupons[this.$route.query.c].title
      );
      console.warn("Sent");
    }
  },
  data() {
    return {
      restaurant: restaurants.find(r => r.uri === this.$route.query.r)
    };
  },
  computed: {
    coupon() {
      return this.restaurant.coupons[this.$route.query.c];
    }
  }
};
</script>
