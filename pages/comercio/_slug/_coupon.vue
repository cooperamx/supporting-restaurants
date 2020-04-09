<template>
  <div>
    <div>
      <h2 class="is-size-3 has-text-weight-bold">
        ¡Estás a un paso de obtener tu cupón! 🤩
      </h2>
    </div>
    <div class="columns is-vcentered">
      <div class="column is-4">
        <Coupon :title="coupon.title" :body="coupon.body" preview />
        <CouponForm :name="commerce.name" @submit="handleSubmit" />
      </div>
      <div class="column is-7 is-offset-1 is-hidden-touch">
        <img src="~/assets/coupons.png" alt="coupons" />
      </div>
    </div>
  </div>
</template>

<script>
import Coupon from '~/components/ui/Coupon';
import CouponForm from '~/components/CouponForm';
import { sendWhatsappMessage } from '~/libs/utils';
import { restaurants } from '~/libs/dbStatic';
export default {
  components: {
    Coupon,
    CouponForm
  },
  methods: {
    async handleSubmit(form) {
      const { name, email, phone } = form;
      let message = `Mi nombre: ${name}`;
      message += `\nMi correo: ${email}`;

      if (form.phone) {
        message += `\nMi teléfono: ${phone}`;
      }

      message += `\n\n*Cupón*`;
      message += `\n${this.coupon.title}`;

      let coupon = await this.saveCoupon({ name, email, phone });

      if (coupon) sendWhatsappMessage(this.commerce.phone, message);
      else return;
    },
    async saveCoupon(data) {
      return this.$axios.$post('https://enccipenry1ma.x.pipedream.net', data);
    }
  },
  data() {
    const { params } = this.$route;
    const commerce = restaurants.find(r => r.slug === params.slug);
    const coupon = commerce.coupons.find(c => c.id === params.coupon);

    if (!coupon) {
      this.$router.replace('/comercio/' + params.slug);
    }

    return {
      commerce,
      coupon
    };
  }
};
</script>
