<template>
  <div>
    <header class="hero">
      <div class="hero-body">
        <div class="container is-widescreen">
          <Header />
        </div>
      </div>
    </header>
    <section class="content">
      <div class="container is-widescreen">
        <nuxt />
      </div>
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Footer from '~/components/Footer';
import Header from '~/components/ui/Header';

export default {
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

.hero {
  background-color: var(--head-bg);
  color: var(--main-text);
}

.hero-body {
  padding: 1rem;
}

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
