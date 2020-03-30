<template>
  <div class="__container">
    <div>
      <h2>Company page</h2>
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
import Coupon from '../components/ui/Coupon'

export default {
  components: {
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
