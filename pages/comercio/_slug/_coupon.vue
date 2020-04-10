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
        <article v-show="errors.length" class="message is-danger">
          <div class="message-header">
            <p>Algo salio mal!</p>
            <button
              @click.prevent="clearErrors"
              class="delete"
              aria-label="delete"
            ></button>
          </div>
          <div class="message-body">
            <ul>
              <li :key="error" v-for="error in errors">
                {{ error }}
              </li>
            </ul>
          </div>
        </article>

        <CouponForm
          :commerceName="commerce.name"
          :form="form"
          @submit="handleSubmit"
        />
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
    clearErrors() {
      this.errors = [];
    },
    async handleSubmit() {
      const { name, email, phone } = this.form;
      this.clearErrors();
      if (!name) this.errors.push('Incluye tu nombre');
      if (!email) this.errors.push('Incluye tu correo electronico');

      if (this.errors.length) return;

      let message = `Mi nombre: ${name}`;
      message += `\nMi correo: ${email}`;

      if (phone) {
        message += `\nMi teléfono: ${phone}`;
      }

      message += `\n\n*Cupón*`;
      message += `\n${this.coupon.title}`;

      try {
        await this.saveCoupon({ name, email, phone });
        sendWhatsappMessage(this.commerce.phone, message);
      } catch (e) {
        this.errors.push('Oops! Parece que algo salio mal');
      }
    },
    async saveCoupon(data) {
      return this.$axios.$post(`${process.env.baseUrl}/api/v1/checkout`, data); // eslint-disable-line
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
      coupon,
      errors: [],
      form: {
        name: '',
        phone: '',
        email: ''
      }
    };
  }
};
</script>
