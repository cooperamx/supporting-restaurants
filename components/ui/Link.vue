<template>
  <a class="link is-size-7" v-if="href" :href="href">
    <slot></slot>
  </a>
  <nuxt-link class="link is-size-7" v-else :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    href: String,
    to: {
      type: Object,
      default: () => ({}),
    }
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
