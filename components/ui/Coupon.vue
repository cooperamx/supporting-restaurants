<template>
  <div>
    <div class="__coupon">
      <div class="__box">
        <div class="__text">
          <h3>{{ title }}</h3>
          <p>{{ body }}</p>
        </div>
        <div v-if="!preview">
          <div class="__line"></div>
          <div class="columns">
            <div class="__action column is-narrow">
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
.__coupon {
  position: relative;
  background-color: var(--main-bg);
  overflow: hidden;
  padding: 0.75rem;
  margin: -0.75rem;
  max-width: 500px;
}

.__box {
  background-color: #fff;
  color: var(--main-text);
  border: solid 1px rgba(151, 151, 151, 0.25);
  padding: 2rem 2.5rem 1rem 2.5rem;
  margin: 5px;
  box-shadow: 0px 12px 16px -12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.__line {
  border: dashed 3px rgb(198, 198, 198);
  border-width: 0 0 2px 0;
  margin-bottom: 0.5rem;
}

.__box .__text {
  padding-bottom: 1rem;
}

.__box .__text h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(72, 71, 69, 0.7);
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
