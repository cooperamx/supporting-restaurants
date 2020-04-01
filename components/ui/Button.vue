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
  font-weight: bold;
  font-size: 1.2rem;
  padding: .5rem 1rem;
  cursor: pointer;
  user-select: none;
  width: 100%;
}

.__primary {
  background-color: var(--primary);
  color: var(--main-bg);
}
</style>
