<template>
  <Layout>
    <div slot="header">
      <CompanyHero
        compact
        :name="restaurant.name"
        :address="restaurant.location"
        :website="restaurant.website"
        :logo="restaurant.image"
      >
        <nav-link
          slot="breadcrumb"
          :to="{ name: 'company', query: { r: this.restaurant.uri } }"
        >
          <span>&lt; {{ this.restaurant.name }}</span>
        </nav-link>
      </CompanyHero>
    </div>
    <div slot="main">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-3 has-text-weight-bold">
            ¡Estás a un paso de obtener tu cupón! 🤩
          </h2>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-4">
          <Coupon :title="coupon.title" :body="coupon.body" preview />
          <FromCoupon :name="restaurant.name" @click="handleClick" />
        </div>
        <div class="column is-half is-hidden-touch">
          <img src="../assets/coupons.png" alt="coupons" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout';
import CompanyHero from '../components/CompanyHero';
import Coupon from '../components/ui/Coupon';
import NavLink from '../components/ui/Link';
import FromCoupon from '../components/FromCoupon';
import { sendWhatsappMessage } from '../libs/utils';
import { restaurants } from '../libs/dbStatic';

export default {
  components: {
    Layout,
    CompanyHero,
    Coupon,
    NavLink,
    FromCoupon
  },
  methods: {
    handleClick(form) {
      let message = `Mi nombre: ${form.name}`;
      message += `\nMi correo: ${form.email}`;
      message += `\n\n*Cupon*`;
      message += `\n${this.restaurant.coupons[this.$route.query.c].title}`;
      sendWhatsappMessage(this.restaurant.phone, message);
      console.warn('Send');
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
