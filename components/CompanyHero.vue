<template>
  <header class="header">
    <SearchBar />
    <div class=""></div>
  </header>
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
.header {
  background-color: var(--head-bg);
  color: var(--main-text);
  height: 272px;
  padding: 16px 0 0 32px;
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
