<script setup>
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useRootStore } from '@/store/index';
  import SquareButton from '@/components/SquareButton.vue';
  import Card from '@/components/Card.vue';
  import Stub from '@/components/Stub.vue';

  const router = useRouter();
  const rootStore = useRootStore();
  const { favoriteSneakers } = storeToRefs(rootStore);
  rootStore.getSneakers();

  function goBack() {
    router.go(-1);
  }
</script>

<template>
  <div class="favorites">
    <div class="favorites__header">
      <SquareButton class="favorites__back" size="medium" @click="goBack">
        <img src="/arrow-left.svg" width="7" height="12" alt="Стрелка налево">
      </SquareButton>

      <h1 class="favorites__title">Мои закладки</h1>
    </div>

    <Stub 
      v-if="favoriteSneakers.length === 0" 
      class="favorites__empty"
      title="Закладок нет :(" 
      text="Вы ничего не добавляли в закладки"
      src="/emoji-1.png"
      :func="goBack"
    />

    <ul v-else class="favorites__cards">
      <li class="favorites__card" v-for="item in favoriteSneakers" :key="item.id">
        <Card :card="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.favorites {
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

  &__empty {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
