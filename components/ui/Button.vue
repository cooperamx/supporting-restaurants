<template>
  <div
    v-bind:class="{
      __buttom : true,
      __primary: primary
    }"
    @click="handleClick"
  >
    {{text}}
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
      this.$emit('click', e);
    }
  }
}
</script>

<style scoped>
.__buttom {
  background-color: var(--main-bg);
  border-radius: 2rem;
  color: var(--primary);
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  padding: .5rem 1rem;
  cursor: pointer;
  user-select: none;
}

.__primary {
  background-color: var(--primary);
  color: var(--main-bg);
}
</style>
