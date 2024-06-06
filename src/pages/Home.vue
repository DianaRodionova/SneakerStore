<script setup>
  import { storeToRefs } from 'pinia';
  import { useRootStore } from '@/store/index';
  import {LOADING, FAILED} from '@/utils/statuses';
  import Loader from '@/components/Loader.vue';
  import Slide from '@/components/Slide.vue';
  import Sort from '@/components/Sort.vue';
  import Search from '@/components/Search.vue';
  import Card from '@/components/Card.vue';
  
  const rootStore = useRootStore();
  rootStore.getSneakers();
  const { sneakers, status } = storeToRefs(rootStore);
</script>

<template>
  <section class="home">
    <Slide class="home__slide" />

    <div class="home__header">
      <h3 class="home__title">Все кроссовки</h3>

      <div class="home__filters">
        <Sort class="home__sort" />

        <Search class="home__search" />
      </div>
    </div>

    <div v-if="status === LOADING" class="home__loader">
      <Loader />
    </div>

    <div v-else-if="status === FAILED">Не удалось загрузить карточки товаров</div>

    <ul v-else class="home__cards">
      <li class="home__card" v-for="item in sneakers" :key="item.id">
        <Card :card="item" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.home {
  &__slide {
    margin-bottom: 39px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  &__title {
    @include h3;
  }

  &__filters {
    display: flex;
    align-items: center;
  }

  &__sort {
    margin-right: 20px;
  }

  &__loader {
    position: relative;
    
    height: 80px;
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
}
</style>
