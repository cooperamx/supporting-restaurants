<template>
  <div class="button" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    primary: Boolean
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style scoped>
.button {
  cursor: pointer;
  user-select: none;
  background-color: #DEDEDE;
  border-radius: 50%;
  color: white;
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  padding: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
}
</style>
