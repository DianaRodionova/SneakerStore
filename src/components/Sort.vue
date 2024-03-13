<script setup>
  import { useRootStore } from '@/store/index';

  const sorts = [
    {
      id: 1,
      name: 'Выберите сортировку',
      value: 'not',
    },
    {
      id: 2,
      name: 'По названию',
      value: 'title',
    },
    {
      id: 3,
      name: 'Cамая низкая цена',
      value: 'price',
    },
    {
      id: 4,
      name: 'Cамая высокая цена',
      value: '-price',
    }, 
  ];

  const rootStore = useRootStore();

  const onChange = (event) => {
    rootStore.sortSneakers(event.target.value);
  };
</script>

<template>
  <select class="sort" name="sneakers" id="sneakers" @change="onChange">
    <option v-for="item in sorts" :key="item.id" class="sort__option" :value="item.value"> {{ item.name }}</option>
  </select>
</template>

<style lang="scss" scoped>
.sort {
  font-size: 14px;
  line-height: 17px;

  width: 200px;
  height: 45px;
  padding: 0 18px;

  color: $scorpion;
  background-color: $white;
  border: 1px solid $concrete;
  border-radius: 10px;

  &:hover {
    cursor: pointer;

    border-color: $scorpion;
  }
}
</style>
