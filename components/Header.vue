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
    <div class="__glich">
      <div class="__circle"></div>
    </div>
  </section>
</template>

<script>
import Buttom from './ui/Buttom';

export default {
  components: {
    Buttom
  }
};
</script>

<style scoped>
.hero {
  background:
    url(../assets/header-01.png) left bottom no-repeat,
    url(../assets/header-02.png) right bottom no-repeat;
  background-color: var(--head-bg);
  background-size: 30%;
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
  font-weight: 800;
  font-family: 'Poppins';
}

.__glich {
  align-items: flex-start;
  display: flex;
  height: 80px;
  justify-content: center;
  overflow: hidden;
  margin-bottom: -10px;
}

.__circle {
  background: var(--main-bg);
  border-radius: 200% 200% 0 0;
  height: 130px;
  width: 100vw;
}
</style>
