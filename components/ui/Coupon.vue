<template>
  <div class="__Coupon">
    <div class="__box">
      <div class="__text">
        <h3>Llévate 2 por el precio de una y media</h3>
        <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telesc.</p>
      </div>
      <Buttom text="Obtener cupón" primary />
    </div>
    <div class="__circle_left"></div>
    <div class="__circle_right"></div>
  </div>
</template>

<script>
import Buttom from './Buttom'

export default {
  components: {
    Buttom
  },
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
  overflow: hidden;
}

.__box {
  background-color: #fff;
  color: var(--main-text);
  border: solid 1px rgba(151, 151, 151, 0.25);
  padding: 2rem 2.5rem 1rem 2.5rem;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  margin: 5px;
  border-radius: 10px;
}

.__box .__text {
  border: dashed 3px rgb(198, 198, 198);
  border-width: 0 0 2px 0;
  padding-bottom: 1rem;
  margin-bottom: .5rem;
}

.__box .__text h3 {
  font-weight: bold;
  margin-bottom: .5rem;
  color: rgba(72, 71, 69, 0.7)
}

.__circle_left {
  --size: 20px;
  position: absolute;
  width: calc(var(--size) + 0px);
  height: calc(var(--size) * 2);
  border: solid 5px rgba(151, 151, 151, 0.25);
  border-width: 0 1px 1px 0;
  top: 50px;
  left: 5px;
  background-color: var(--main-bg);
  border-bottom-right-radius: calc(var(--size) * 2);
  border-top-right-radius: calc(var(--size) * 2);
  box-shadow: inset -3px 2px 1px 1px rgba(0, 0, 0, 0.05);
}

.__circle_left::before {
  --size: calc(20px - 1px);
  position: absolute;
  display: block;
  content: '';
  width: calc(var(--size) + 2px);
  height: calc(var(--size) * 2);
  background-color: var(--main-bg);
  border-bottom-right-radius: calc(var(--size) * 2);
  border-top-right-radius: calc(var(--size) * 2);
  top: 1px;
  left: -10px;
}

.__circle_right {
  --size: 20px;
  position: absolute;
  width: var(--size);
  height: calc(var(--size) * 2);
  border: solid 5px rgba(151, 151, 151, 0.25);
  border-width: 1px 0 0 1px;
  top: 50px;
  right: 5px;
  background-color: var(--main-bg);
  border-bottom-left-radius: calc(var(--size) * 2);
  border-top-left-radius: calc(var(--size) * 2);
  box-shadow: inset 3px 2px 1px 1px rgba(0, 0, 0, 0.05);
}

.__circle_right::before {
  --size: calc(20px - 1px);
  position: absolute;
  display: block;
  content: '';
  width: calc(var(--size) + 2px);
  height: calc(var(--size) * 2);
  background-color: var(--main-bg);
  border-bottom-left-radius: calc(var(--size) * 2);
  border-top-left-radius: calc(var(--size) * 2);
  top: 1px;
  right: -10px;
}

</style>
