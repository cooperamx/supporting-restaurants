<template>
  <div class="Grid">
    <div v-for="(item, index) in items" :key="index">
      {{ item.msg }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { msg: "restarant 1" },
        { msg: "restarant 2" },
        { msg: "restarant 3" }
      ]
    };
  }
};
</script>

<style scoped>
.Grid {
}
</style>
