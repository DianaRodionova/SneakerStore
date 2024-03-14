<script setup>
  import { ref, inject } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useBasketStore } from '@/store/basket';
  import {LOADING, FAILED} from '@/utils/statuses';
  import BasketCard from '@/components/BasketCard.vue';
  import GreenLink from '@/components/GreenLink.vue';
  import Stub from '@/components/Stub.vue';
  
  const basketStore = useBasketStore();
  basketStore.getSneakers();
  const { sneakers, status, sum, tax} = storeToRefs(basketStore);

  const { closeBasket } = inject('basketActions');

  const isProcessed = ref(false);

  function createOrder() {
    basketStore.createOrder();
    isProcessed.value = true;
  };
</script>

<template>
  <div class="basket">
    <div class="basket__wrapper">
      <button class="basket__back" type="button" @click="closeBasket">
        <svg class="basket__back-icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3299 10.5005L20.7072 3.12321C21.0963 2.7317 21.0963 2.09952 20.7072 1.70801L19.292 0.291799C18.9005 -0.0972665 18.2683 -0.0972665 17.8768 0.291799L10.4995 7.67009L3.12221 0.2928C2.7307 -0.0962657 2.09852 -0.0962657 1.70701 0.2928L0.291799 1.70801C-0.0972665 2.09952 -0.0972665 2.7317 0.291799 3.12321L7.66909 10.5005L0.291799 17.8778C-0.0972665 18.2693 -0.0972665 18.9015 0.291799 19.293L1.70801 20.7082C2.09952 21.0973 2.7317 21.0973 3.12321 20.7082L10.5005 13.3309L17.8778 20.7082C18.2693 21.0973 18.9015 21.0973 19.293 20.7082L20.7082 19.293C21.0973 18.9015 21.0973 18.2693 20.7082 17.8778L13.3299 10.5005Z" fill="currentColor"/>
        </svg>
      </button>

      <div class="basket__header">
        <h3 class="basket__title">Корзина</h3>

        <ul class="basket__list">
          <li class="basket__item" v-for="item in sneakers" :key="item.id">
            <BasketCard :card="item"  />
          </li>
        </ul>
      </div>

      <div v-if="status === LOADING" class="basket__loader">
        загрузка...
      </div>

      <Stub 
        v-else-if="sneakers.length === 0 && !isProcessed" 
        class="basket__empty"
        title="Корзина пустая" 
        text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        src="/package-icon.png"
        :func="closeBasket"
      />

      <Stub 
        v-else-if="sneakers.length === 0 && isProcessed"
        class="basket__empty"
        title="Заказ оформлен!" 
        text="Ваш заказ скоро будет передан курьерской доставке"
        src="/order-success.png"
        :is-processed="isProcessed" 
        :func="closeBasket"
      />

      <div v-else class="basket__footer">
        <ul class="basket__price">
          <li class="basket__price-item">
            <span class="basket__text">Итого:</span>
          
            <div class="basket__line"></div>

            <span class="basket__sum">{{ sum }} руб.</span>
          </li>

          <li class="basket__price-item">
            <span class="basket__text">Налог 5%:</span>
          
            <div class="basket__line"></div>

            <span class="basket__sum">{{ tax }} руб.</span>
          </li>
        </ul>

        <GreenLink tag="button" text="Оформить заказ" @click="createOrder" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basket {
  z-index: 5;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: end;

  min-width: 100%;
  height: 100%;

  background-color: rgba($black, 0.50);

  &__wrapper {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 385px;
    height: 100%;
    padding: 30px;

    background-color: $white;
    box-shadow: -10px 4px 24px 0px rgba($black, 0.10);
  }

  &__back {
    position: absolute;
    top: 17px;
    right: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    &-icon {
      width: 16px;
      height: 16px;

      color: $silver;
    }
  }

  &__title {
    font-size: 24px;
    line-height: 29px;
    font-weight: $font-weight-bold;

    margin-bottom: 30px;
  }

  &__loader {
    position: relative;

    flex-grow: 1;

    height: 80px;
  }

  &__list {
    max-height: calc(100vh - 285px);

    overflow-y: auto;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__price {
    margin-bottom: 24px;

    &-item {
      font-size: 16px;
      line-height: 19px;

      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 19px;
      }
    }
  }

  &__text {
    flex-shrink: 0;
  }

  &__line {
    flex-grow: 1;

    width: 100%;
    height: 1px;
    margin-top: auto;
    margin-right: 8px;
    margin-left: 8px;

    border-bottom: 1px dashed $alto;
  }

  &__sum {
    font-weight: $font-weight-semibold;

    flex-shrink: 0;
  }

  &__empty {
    flex-grow: 1;
  }
}
</style>