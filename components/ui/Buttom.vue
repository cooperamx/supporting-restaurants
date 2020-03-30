<template>
  <div
    v-bind:class="{
      __buttom : true,
      __primary: primary
    }"
  >
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    primary: Boolean
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
  margin: .5rem;
  padding: .5rem 1rem;
}

.__primary {
  background-color: var(--primary);
  color: var(--main-bg);
}
</style>
