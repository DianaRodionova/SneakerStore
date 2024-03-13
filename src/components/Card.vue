<script setup>
  import { useRootStore } from '@/store/index';
  import SquareButton from '@/components/SquareButton.vue';
  
  const props = defineProps({
    card: {
      type: Object,
      required: true,
    },
  });

  const rootStore = useRootStore();

</script>

<template>
  <div class="card">
    <SquareButton v-if="!card.isFavorite" class="card__favorites" @click="rootStore.updateSneakers(card.id, {isFavorite: true})">
      <img src="/heart-like.svg" width="16" height="16" alt="Серое сердце">
    </SquareButton>

    <button v-else class="card__favorites" type="button" @click="rootStore.updateSneakers(card.id, {isFavorite: false})">
      <img src="/like-2.svg" width="30" height="30" alt="Сердце розовое">
    </button>

    <img class="card__image" :src="card.imageUrl" width="133" height="112" :alt="card.title">

    <h4 class="card__title">{{ card.title }}</h4>

    <p class="card__subtitle">Цена:</p>

    <p class="card__price">{{ card.price }} руб.</p>

    <SquareButton v-if="!card.isAdded" class="card__add">
      <img src="/plus.svg" width="11" height="11" alt="Серый плюс">
    </SquareButton>

    <button v-else class="card__add" type="button">
      <img src="/checked.svg" width="32" height="32" alt="Галочка на зеленом фоне">
    </button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;

  width: 210px;
  height: 260px;
  padding: 20px 30px 30px;

  border-radius: 40px;
  border: 1px solid $concrete;
  background: $white;

  &:hover {
    box-shadow: 0px 14px 30px 0px rgba($black, 0.05);
    transform: translate(0 , -.5rem) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
  }

  &__favorites {
    position: absolute;
    top: 29px;
    left: 30px;
  }

  &__image {
    margin-bottom: 14px;
  }

  &__title {
    font-weight: $font-weight-regular;

    margin-bottom: 14px;

    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden; 
  }

  &__subtitle {
    font-size: 11px;
    line-height: 13px;
    font-weight: $font-weight-medium;

    margin-bottom: 2px;

    text-transform: uppercase;
    color: $silver-two;
  }

  &__price {
    font-weight: $font-weight-bold;
  }

  &__add {
    position: absolute;
    right: 30px;
    bottom: 30px;

    width: 32px;
    height: 32px;
  }
}
</style>
