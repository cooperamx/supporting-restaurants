<template>
  <div>
    <div class="coupon">
      <div class="coupon__box">
        <div class="coupon__text">
          <h3>{{ title }}</h3>
          <p>{{ body }}</p>
        </div>
        <div v-if="!preview">
          <div class="coupon__line"></div>
          <div class="columns">
            <div class="coupon__action column is-narrow">
              <Button text="Obtener cupón" primary @click="handleClick" />
            </div>
          </div>
        </div>
      </div>
      <div class="__circle __circle--left"></div>
      <div class="__circle __circle--right"></div>
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  components: {
    Button
  },
  props: {
    title: String,
    body: String,
    disabled: Boolean,
    preview: Boolean
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" scoped>
.coupon {
  position: relative;
  background-color: var(--main-bg);
  overflow: hidden;
  padding: 0.75rem;
  margin: -0.75rem;
  max-width: 500px;
}

.coupon__box {
  background-color: #fff;
  color: var(--main-text);
  border: solid 1px rgba(151, 151, 151, 0.25);
  border-top: solid 4px var(--primary);
  border-bottom: solid 4px var(--primary);
  padding: 2rem 2.5rem 1rem 2.5rem;
  margin: 5px;
  box-shadow: 0px 12px 16px -12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.coupon__line {
  border: dashed 3px rgb(198, 198, 198);
  border-width: 0 0 2px 0;
  margin-bottom: 0.5rem;
}

.coupon__box .coupon__text {
  padding-bottom: 1rem;
}

.coupon__box .coupon__text h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(72, 71, 69, 0.7);
}

.coupon__box .coupon__action {
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
    border-bottom-right-radius: $diameter-circle * 2;
    border-top-right-radius: $diameter-circle * 2;
    box-shadow: inset -3px 2px 1px 1px rgba(0, 0, 0, 0.05);
    left: 17px;

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
    right: 17px;

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
