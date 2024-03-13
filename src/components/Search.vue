<script setup>
  import { useRootStore } from '@/store/index';

  const rootStore = useRootStore();

  const onChange = (event) => {
    rootStore.searchSneakers(event.target.value);
  };
</script>

<template>
  <div class="search">
    <input class="search__input" type="search" placeholder="Поиск" @change="onChange" />

    <img class="search__icon" src="/loupe.svg" width="16" height="16" alt="Лупа">
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;

  &__input {
    font-size: 14px;
    line-height: 17px;
    
    width: 250px;
    height: 45px;
    padding-right: 18px;
    padding-left: 46px;

    color: $scorpion;
    background-color: $white;
    border: 1px solid $concrete;
    border-radius: 10px;

    &::placeholder {
      color: $silver;
    }

    &:hover,
    &:focus {
      border-color: $scorpion;
    }
  }

  &__icon {
    position: absolute;
    top: 15px;
    left: 18px;
  }
}
</style>
