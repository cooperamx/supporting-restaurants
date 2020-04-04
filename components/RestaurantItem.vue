<template>
  <div
    class="column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop is-2-widescreen"
  >
    <div class="product-item" @click="$emit('click')">
      <div class="product-item__ratio">
        <img class="product-item__photo" :src="image" />
      </div>
      <p class="product-item__name">
        {{ name }}
      </p>
      <p class="product-item__location">
        {{ location }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',

  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  padding: 16px;
  color: #7e7e7e;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 16px 16px -16px rgba(0, 0, 0, 0.16);

  cursor: pointer;
  align-items: center;

  &__ratio {
    position: relative;
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-position: center;
    object-fit: contain;
    border-radius: 16px;
    margin-bottom: 8px;
    width: 100%;
    height: 100%;
  }

  &__name {
    font-weight: bold;
  }
}
</style>
