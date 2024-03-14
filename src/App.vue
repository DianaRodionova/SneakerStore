<script setup>
  import { ref, provide } from 'vue';
  import { RouterView } from 'vue-router';
  import Basket from '@/components/Basket.vue';
  import Header from '@/components/Header.vue';

  const basketOpen = ref(false);
  const snaсkbarShow = ref(false);
  const snaсkbarItem = ref({});

  const openBasket = () => {
    basketOpen.value = true;
  };

  const closeBasket = () => {
    basketOpen.value = false;
  };

  provide('basketActions', {openBasket, closeBasket});
</script>

<template>
  <div class="app">
    <Basket v-if="basketOpen" />

    <Header />

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