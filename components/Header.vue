<template>
  <section class="hero">
    <div class="hero-body is-vcentered">
      <div class="container has-text-centered">
        <h1 class="title __title">
          Coopera.mx
        </h1>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h2 class="subtitle">
              Queremos ayudar a nuestros restaurantes locales a tener un medio para hacer preventas o recibir donaciones de manera digital, y así apoyarlos en la crisis.
            </h2>
            <div>
              <Buttom text="Soy un restaurante" primary />
              <Buttom text="Ver restaurantes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Buttom from './ui/Buttom'

export default {
  components: {
    Buttom
  }
}
</script>

<style scoped>
.hero {
  background-color: var(--head-bg);
  color: var(--main-text);
  height: 700px;
}

.hero-body.is-vcentered {
  align-items: center;
  justify-content: center;
  display: flex;
}

.hero .title {
  color: var(--primary);
  font-size: 3rem;
}
</style>
