<script setup>
 import { useBasketStore } from '@/store/basket';
 import SquareButton from '@/components/SquareButton.vue';
  
  const props = defineProps({
    card: {
      type: Object,
      required: true,
    },
  });

  const basketStore = useBasketStore();
</script>

<template>
  <div class="basket-card">
    <img class="basket-card__image" :src="card.imageUrl" width="70" height="70" :alt="card.title">

    <div class="basket-card__block">
      <h4 class="basket-card__title">{{ card.title }}</h4>

      <p class="basket-card__price">{{ card.price }} руб.</p>
    </div>

    <SquareButton class="basket-card__delete" @click="basketStore.deleteSneakers(card.id, card.parentId)">
      <img src="/cross.svg" width="11" height="11" alt="Серый крестик">
    </SquareButton>
  </div>
</template>

<style lang="scss" scoped>
.basket-card {
  position: relative;

  display: flex;

  height: 119px;
  padding: 20px;

  border-radius: 20px;
  border: 1px solid $concrete;

  background: $white;

  &__image {
    margin-right: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: $font-weight-regular;

    margin-bottom: 8px;

    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden; 
  }

  &__price {
    font-weight: $font-weight-bold;
  }

  &__delete {
    position: absolute;
    right: 21px;
    bottom: 21px;

    width: 32px;
    height: 32px;
  }
}
</style>