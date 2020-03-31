<template>
  <div>
    <CompanyHero
      name="Louie Burger"
      address="Pedro Moreno 1290, col. Americana, Guadalajara Jalisco."
      website="https://louie-burguer.com.mx"
      logo="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png"
    />
    <div class="columns __container __topspace">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h2>¡Estás a un paso de obtener tu cupón! 🤩</h2>
        <div class="columns">
          <div class="column is-half __topspace">
            <Coupon
              title="Llévate 2 por el precio de una y media"
              body="In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc."
            />

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
import CompanyHero from '../components/CompanyHero'
import Coupon from "../components/ui/Coupon";
import FromCoupon from "../components/FromCoupon";
import { sentWhatsappMessage } from "../libs/utils";

export default {
  components: {
    Buttom,
    CompanyHero,
    Coupon,
    FromCoupon
  },
  methods: {
    handleClick () {
      sentWhatsappMessage();
      console.warn("Sent");
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
