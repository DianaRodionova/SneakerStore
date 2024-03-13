<script setup>
  import Slide from '@/components/Slide.vue';
  import Sort from '@/components/Sort.vue';
  import Search from '@/components/Search.vue';
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
  }
</style>
