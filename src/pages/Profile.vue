<script setup>
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useOrdersStore } from '@/store/orders';
  import {LOADING, FAILED} from '@/utils/statuses';
  import Loader from '@/components/Loader.vue';
  import SquareButton from '@/components/SquareButton.vue';
  import Card from '@/components/Card.vue';
  import Stub from '@/components/Stub.vue';

  const router = useRouter();
  const ordersStore = useOrdersStore();
  const { orders, status } = storeToRefs(ordersStore);
  ordersStore.getOrders();

  function goBack() {
    router.go(-1);
  }

</script>

<template>
  <div class="profile">
    <div class="profile__header">
      <SquareButton class="profile__back" size="medium" @click="goBack">
        <img src="/arrow-left.svg" width="7" height="12" alt="Стрелка налево">
      </SquareButton>

      <h1 class="profile__title">Мои покупки</h1>
    </div>

    <div v-if="status === LOADING" class="profile__loader">
      <Loader />
    </div>

    <div v-else-if="status === FAILED" class="profile__loader">
      Не удалось загрузить покупки
    </div>

    <Stub 
      v-else-if="orders.length === 0" 
      class="profile__empty"
      title="У вас нет заказов" 
      text="Оформите хотя бы один заказ."
      src="/emoji-2.png"
      :func="goBack"
    />

    <ul v-else class="profile__orders">
      <li class="profile__order" v-for="order in orders" :key="order.id">
        <h4 class="profile__order-number">Заказ # {{ order.id }}</h4>

        <p class="profile__order-sum">{{ order.sum }} руб.</p>

        <ul class="profile__cards">
          <li class="profile__card" v-for="item in order.items" :key="item.id">
            <Card :card="item" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  &__header {
    display: flex;
    align-items: center;

    margin-bottom: 40px;
  }

  &__back {
    margin-right: 20px;
  }

  &__title {
    @include h3;
  }

  &__orders {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  &__order {
    &:not(:last-child) {
      margin-bottom: 35px;
    }

    &-number {
      font-size: 17px;
      line-height: 20px;

      margin-bottom: 10px;
    }

    &-sum {
      font-weight: 600;

      margin-bottom: 25px;

      color: $scorpion;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: -40px;
  }

  &__card {
    margin-right: 40px;
    margin-bottom: 40px;

    &:nth-child(4n),
    &:last-child {
      margin-right: 0;
    }
  }

  &__loader {
    position: relative;
    
    height: 80px;
  }

  &__empty {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>