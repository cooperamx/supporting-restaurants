<template>
  <div>
    <CompanyHero
      :name="restaurant.name"
      :address="restaurant.location"
      :website="restaurant.website"
      :logo="restaurant.image"
    />
    <div class="columns __container __topspace">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h2>¡Estás a un paso de obtener tu cupón! 🤩</h2>
        <div class="columns">
          <div class="column is-half __topspace">
            <Coupon :title="coupon.title" :body="coupon.body" />

            <FromCoupon @click="handleClick" />
          </div>
          <div class="column is-half">
            <img src="../assets/coupons.png" alt="coupons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buttom from "../components/ui/Buttom";
import CompanyHero from "../components/CompanyHero";
import Coupon from "../components/ui/Coupon";
import FromCoupon from "../components/FromCoupon";
import { sentWhatsappMessage } from "../libs/utils";
import { restaurants } from "../libs/dbStatic";

export default {
  components: {
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

<style>
.__container h2 {
  font-weight: 800;
  font-size: 2rem;
}

.__topspace {
  margin: 2rem 0;
}
</style>
