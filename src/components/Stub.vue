<script setup>
  import GreenLink from '@/components/GreenLink.vue';

  const props = defineProps({
    title: String,
    text: String,
    src: String,
    func: Function,
    isProcessed: Boolean,
  });
</script>

<template>
  <div class="stub">
    <img class="stub__img" :src="src" width="120" height="120" :alt="title">
    
    <h3 class="stub__title"> {{ title }}</h3>

    <p class="stub__text"> {{ text }}</p>

    <GreenLink tag="button" text="Вернуться назад" back @click="func" />
  </div>
</template>

<style lang="scss" scoped>
.stub {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__img {
    width: 120px;
    height: 120px;
    margin-bottom: 21px;
  }

  &__title {
    font-size: 22px;
    line-height: 27px;
    font-weight: $font-weight-semibold;

    margin-bottom: 9px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;

    max-width: 285px;
    margin-bottom: 40px;

    text-align: center;
    opacity: 0.4;
  }
}
</style>