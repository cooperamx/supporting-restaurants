<template>
  <nuxt-child></nuxt-child>
</template>
<script>
export default {
  validate({ params, redirect }) {
    if (params.slug) return true;

    redirect('/');
    return false;
  }
};
</script>
