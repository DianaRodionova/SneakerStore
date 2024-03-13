<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <main class="app__main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 1080px;
  margin: 85px auto;

  border-radius: 20px;
  background-color: $white;
  box-shadow: 0px 10px 20px 0px rgba($black, 0.04);

  &__main {
    padding: 45px 60px;
  }
}
</style>