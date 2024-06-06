<script setup>
  import { ref, inject, computed } from 'vue';
  import { useBasketStore } from '@/store/basket';
  import HeaderLink from '@/components/HeaderLink.vue';

  const basketStore = useBasketStore();
  basketStore.getSneakers();

  const sum = computed(() => basketStore.sum);
  const links = ref([
    {
      name: 'Закладки',
      url: '/favorites',
      icon: '/heart.svg',
    },
    {
      name: 'Профиль',
      url: '/profile',
      icon: '/profile.svg',
    },
  ]);

  const { openBasket } = inject('basketActions');
</script>

<template>
  <div class="header">
    <a class="header__logo" href="/">
      <img class="header__img" src="/logo.png" width="40" height="40" alt="logo" />

      <div class="header__wrapper">
        <h1 class="header__title">DIA SNEAKERS</h1>

        <p class="header__text">Магазин лучших кроссовок</p>
      </div>
    </a>

    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <button class="header__basket" type="button" @click="openBasket">
            <img class="header__basket-icon" src="/cart.svg" width="18" height="18" alt="Корзина">

            <span class="header__basket-text">{{ sum }} руб.</span>
          </button>
        </li>

        <li class="header__item" v-for="link in links" :key="link.key">
          <HeaderLink :link="link" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 128px;
  padding-right: 60px;
  padding-left: 45px;

  border-bottom: 1px solid $gallery;

  &__logo {
    display: flex;
    align-items: center;
  }

  &__img {
    width: 40px;
    height: 40px;

    margin-right: 16px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;

    text-transform: uppercase;
  }

  &__text {
    color: $silver-chalice;
  }

  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
  
  &__basket {
    font-weight: $font-weight-semibold;
    
    display: flex;
    align-items: center;

    color: $scorpion;

    &:hover {
      color: $black;
    }

    &-icon {
      margin-right: 8px;
    }
  }
}
</style>