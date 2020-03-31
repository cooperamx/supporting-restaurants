<template>
  <a class="link is-size-7" :href="href">
    <span>{{ label }}</span>
  </a>
</template>

<script>
// TODO: include back navigation @click="$router.go(-1)"

export default {
  props: {
    label: String,
    href: String,
  }
}
</script>

<style lang="sass" scoped>
.link
  color: var(--primary)
  &:hover
    color: var(--primary)
    text-decoration: underline
</style>
