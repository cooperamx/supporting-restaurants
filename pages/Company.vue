<template>
  <div class="__container">
    <div>
      <CompanyHero name="Louie" address="Pedro Moreno 1290, col. Americana, Guadalajara Jalisco." website="https://louie-burguer.com.mx" />
      <div class="__list">
        <Coupon
          title="Llévate 4 por el precio de una y media"
          body="In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc."
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
