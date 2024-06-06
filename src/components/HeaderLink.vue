<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink class="header-link" :to="link.url">
    <img class="header-link__icon" :src="link.icon" width="18" height="18" :alt="link.name">

    <span class="header-link__text"> {{ link.name }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.header-link {
  display: flex;
  align-items: center;
  
  color: $scorpion;

  &:hover {
    color: $black;
  }

  &__icon {
    margin-right: 8px;
  }
}
</style>
