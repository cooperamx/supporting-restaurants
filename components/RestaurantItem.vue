<template>
  <div class="product-item card column is-one-quarter" @click="$emit('click')">
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
  cursor: pointer;
  padding: 16px;
  color: #7E7E7E;
}

.product-item__photo {
  width: 230px;
  height: 208px;
  border-radius: 16px;
}

.product-item__name {
  font-weight: bold;
}
</style>
