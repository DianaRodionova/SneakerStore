<script setup>
  import { inject } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: false,
    },
  });

  const { onHideSnackbar } = inject('snaсkbar');

  setTimeout(onHideSnackbar, 3000);
</script>

<template>
  <div class="snackbar">
    <img v-if="!error" class="snackbar__icon" src="/checkmark.svg" width="24" height="24" alt="Галочка">

    <img v-else class="snackbar__icon" src="/circle-cross.svg" width="24" height="24" alt="Крестик">

    <span class="snackbar__text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .snackbar {
    position: fixed;
    top: 50px;
    left: 50%;

    z-index: 100;

    display: flex;
    align-items: center;

    padding: 20px;

    border-radius: 6px;
    background-color: #4E5D75;

    transform: translateX(-50%);

    &__icon {
      flex-shrink: 0;

      margin-right: 10px;
    }

    &__text {
      color: $white;
    }
  }
</style>