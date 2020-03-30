<template>
  <div class="__Coupon">
    <div class="__box">
      <h3>Llévate 2 por el precio de una y media</h3>
      <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    primary: Boolean
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
.__Coupon {
  position: relative;
  background-color: var(--main-bg);
}

.__box {
  background-color: #fff;
  color: var(--main-text);
}
</style>
