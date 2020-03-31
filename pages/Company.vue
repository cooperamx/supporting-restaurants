<template>
  <div class="__container container is-fluid">
    <div>
      <CompanyHero name="Louie" address="Pedro Moreno 1290, col. Americana, Guadalajara Jalisco." website="https://louie-burguer.com.mx" />
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
    </div>
  </div>
</template>

<script>
import CompanyHero from '../components/CompanyHero'
import Coupon from '../components/ui/Coupon'

export default {
  components: {
    CompanyHero,
    Coupon
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

}

.__list {
  padding: 2rem;
}
</style>
