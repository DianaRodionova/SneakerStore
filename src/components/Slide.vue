<script setup>
  import BuyButton from '@/components/BuyButton.vue';

  const sneakers = {
                      id: 13,
                      title: 'Кроссовки STAN SMITH, FOREVER',
                      price: 17000,
                      imageUrl: '/sneakers/sneakers-13.jpg',
                    };
</script>

<template>
  <div class="slide">
    <div class="slide__wrapper">
      <img class="slide__logo" src="/adidas-disney.png" alt="Лягушка и кроссовки">

      <h2 class="slide__title">Stan Smith, <span class="slide__title-accent">Forever!</span></h2>

      <BuyButton />
    </div>

    <img src="/frog.png" width="641" height="300" alt="Лягушка и кроссовки">
  </div>
</template>

<style lang="scss" scoped>
.slide {
  position: relative;

  display: flex;
  justify-content: space-between;

  background-color: $spring-wood;
  border-radius: 20px;

  &__wrapper {
    margin-top: 88px;
    margin-left: 60px;
  }

  &__logo {
    position: absolute;
    top: 16px;
    left: 20px;
  }

  &__title {
    font-size: 38px;
    line-height: 46px;

    margin-bottom: 20px;

    color: $sushi;

    &-accent {
      color: $black;
    }
  }
}
</style>