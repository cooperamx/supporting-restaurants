<template>
  <div class="__Coupon" >
    <div class="__box">
      <div class="__text">
        <h3>{{title}}</h3>
        <p>{{body}}</p>
      </div>
      <div class="columns">
        <div class="__action column is-narrow">
          <Buttom text="Obtener cupón" primary @click="handleClick" />
        </div>
      </div>
    </div>
    <div class="__circle __circle--left"></div>
    <div class="__circle __circle--right"></div>
  </div>
</template>

<script>
import Buttom from './Buttom'

export default {
  components: {
    Buttom
  },
  props: {
    title: String,
    body: String
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss" scoped>
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

.__box .__action {
  padding: 1rem;
}

@mixin set-before {
  position: absolute;
  display: block;
  content: '';
  width: $diameter-circle + 1px;
  height: ($diameter-circle - 1px) * 2;
  background-color: var(--main-bg);
}

$diameter-circle: 20px;

.__circle {
  position: absolute;
  width: $diameter-circle;
  height: $diameter-circle * 2;
  border: solid 5px rgba(151, 151, 151, 0.25);
  background-color: var(--main-bg);
  top: 50px;

  &--left {
    border-width: 0 1px 1px 0;
    /* left: 5px; */
    border-bottom-right-radius: $diameter-circle * 2;
    border-top-right-radius: $diameter-circle * 2;
    box-shadow: inset -3px 2px 1px 1px rgba(0, 0, 0, 0.05);

    &::before {
      @include set-before;
      border-bottom-right-radius: $diameter-circle * 2;
      border-top-right-radius: $diameter-circle * 2;
      top: 0;
      left: -10px;
    }
  }

  &--right {
    border-width: 1px 0 0 1px;
    border-bottom-left-radius: $diameter-circle * 2;
    border-top-left-radius: $diameter-circle * 2;
    box-shadow: inset 3px 2px 1px 1px rgba(0, 0, 0, 0.05);
    right: 15px;

    &::before {
      @include set-before;
      border-bottom-left-radius: $diameter-circle * 2;
      border-top-left-radius: $diameter-circle * 2;
      top: 0;
      right: -10px;
    }
  }
}


</style>
