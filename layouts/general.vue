<template>
  <div>
    <header class="hero">
      <div class="hero-body">
        <div class="header level is-mobile has-background-white">
          <div class="level-left">
            <div class="level-item">
              <h2 class="is-size-4 is-size-6-mobile has-text-weight-bold">
                <a class="logo" href="/">Coopera.mx</a>
              </h2>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item is-hidden-touch">
              <nuxt-link class="link is-size-7 has-text-weight-bold" to="/">
                <Button class="is-size-7" text="Inicio" primary />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="content">
      <nuxt />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';

export default {
  components: {
    Footer,
    Button
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

.header {
  border-radius: 2rem;
  padding: 0.5rem;
  @include desktop() {
    .header {
      padding: 1rem 1.5rem;
    }
  }
}

.logo {
  color: var(--primary);
  margin-right: 56px;
}

.link {
  color: #666666;
}

.hero {
  background-color: var(--head-bg);
  margin-bottom: 5rem;
}

.header {
  padding: 1rem 1.5rem;
}

.hero-body {
  padding: 1rem 1rem 2rem 1rem;
}
</style>
