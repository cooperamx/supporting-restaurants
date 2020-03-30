<template>
  <div class="column is-one-quarter is-2-widescreen is-half-mobile">
    <div class="product-item" @click="$emit('click')">
      <img
        class="product-item__photo"
        :src="image"
      />
      <p class="product-item__name">
        {{ name }}
      </p>
      </p class="product-item__location">
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
      required: true
    },
    image: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.product-item {
  padding: 16px;
  color: #7E7E7E;
  border: 1px solid #E5E5E5;
  border-radius: 16px;
  box-shadow: 0 16px 16px -16px rgba(0, 0, 0, 0.16);

  cursor: pointer;
  align-items: center;
}

.product-item__photo {
  border-radius: 16px;
  margin-bottom: 8px;
  width: 100%;
  height: auto;
}

.product-item__name {
  font-weight: bold;
}
</style>
