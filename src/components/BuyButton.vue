<script setup>
</script>

<template>
  <button class="buy-button" type="button">Купить</button>
</template>

<style lang="scss" scoped>
.buy-button {
  font-size: 16px;
  line-height: 19px;
  font-weight: $font-weight-bold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 177px;
  height: 47px;

  text-transform: uppercase;

  color: $white;
  background-color: $conifer;
  border-radius: 110px;

  &:hover {
    background-color: $sushi;
  }
}
</style>
