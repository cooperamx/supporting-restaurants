<template>
  <div class="header level is-mobile has-background-white">
    <div class="level-left">
      <div class="level-item">
        <h2 class="is-size-4 is-size-6-mobile has-text-weight-bold">
          <a class="logo" href="/">Coopera.mx</a>
        </h2>
      </div>
      <div class="level-item is-hidden-touch">
        <a class="link is-size-7 has-text-weight-bold" href="/restaurantes">Ver restaurantes</a>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <Button class="is-size-7" text="Soy un restaurante" primary />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  components: {
    Button
  }
};
</script>

<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

.header
  border-radius: 2rem
  padding: 0.5rem

.logo
  color: var(--primary)
  margin-right: 56px

.link
  color: #666666

+desktop()
  .header
    padding: 1rem 1.5rem
</style>
