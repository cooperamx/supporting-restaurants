<template>
  <div class="__container">
    <div>
      <CompanyHero
        name="Louie Burger"
        address="Pedro Moreno 1290, col. Americana, Guadalajara Jalisco."
        website="https://louie-burguer.com.mx"
        logo="https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/f4d0e3a5-2028-431d-8ffd-466f07c50ad7_LOUIEBURGER.png"
      />
      <div class="__list columns is-multiline">
        <Coupon
          v-for="(coupon, index) in coupons"
          :key="index"
          :title="coupon.title"
          :body="coupon.body"
          class="column is-one-third-desktop is-half-tablet is-full-mobile"
          @click="handlerClick"
        />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import CompanyHero from '../components/CompanyHero'
import Coupon from '../components/ui/Coupon'
import Footer from '../components/Footer'

export default {
  components: {
    CompanyHero,
    Coupon,
    Footer,
  },
  methods: {
    handlerClick() {
      this.$router.push({
        path: "/coupons"
      });
    }
  },
  data: function () {
    return {
      coupons: [{
        title: 'Llévate 2 por el precio de una y media',
        body: 'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.',
      }, {
        title: 'Llévate 2 por el precio de una y media',
        body: 'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.',
      }, {
        title: 'Llévate 2 por el precio de una y media',
        body: 'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.',
      }, {
        title: 'Llévate 2 por el precio de una y media',
        body: 'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.',
      }, {
        title: 'Llévate 2 por el precio de una y media',
        body: 'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.',
      }, {
        title: 'Llévate 2 por el precio de una y media',
        body: 'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.',
      }]
    }
  }
}
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
