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
            <div class="columns is-1 is-centered">
              <div class="column is-narrow">
                <Buttom text="Soy un restaurante" primary />
              </div>
              <div class="column is-narrow">
                <Buttom text="Ver restaurantes" />
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
.hero {
  background:
    url(../assets/header-01.png) left bottom no-repeat,
    url(../assets/header-02.png) right bottom no-repeat;
  background-color: var(--head-bg);
  background-size: 30%;
  color: var(--main-text);
  height: 700px;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    height: 200vw;;
    width: 300vw;
    border-radius: 100%;
    background: var(--main-bg);
    bottom: -192vw;
    left: -100vw;
  }

  & .title {
    color: var(--primary);
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Poppins';
  }
}

.hero-body.is-vcentered {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
