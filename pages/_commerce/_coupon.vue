<template>
  <div>
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
        <FromCoupon :name="commerce.name" @click="handleClick" />
      </div>
      <div class="column is-8 is-hidden-touch">
        <img src="~/assets/coupons.png" alt="coupons" />
      </div>
    </div>
  </div>
</template>

<script>
import Coupon from '~/components/ui/Coupon';
import FromCoupon from '~/components/FromCoupon';
import { sendWhatsappMessage } from '~/libs/utils';
import { restaurants } from '~/libs/dbStatic';

export default {
  components: {
    Coupon,
    FromCoupon
  },
  methods: {
    handleClick(form) {
      let message = `Mi nombre: ${form.name}`;
      message += `\nMi correo: ${form.email}`;
      message += `\n\n*Cupon*`;
      message += `\n${
        this.restaurant.coupons[this.$route.params.coupon].title
      }`;
      sendWhatsappMessage(this.commerce.phone, message);
    }
  },
  data() {
    const commerce = restaurants.find(
      r => r.slug === this.$route.params.commerce
    );
    const coupon = commerce.coupons.find(
      c => c.id === this.$route.params.coupon
    );
    return {
      commerce,
      coupon
    };
  }
};
</script>
