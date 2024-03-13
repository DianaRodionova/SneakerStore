<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'small',
  },
});

const classes = computed(() => {
  return {
    [props.size]: !!props.size,
  };
});
</script>

<template>
  <button class="square-button" type="button" :class="classes">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.square-button {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;
  border: 1px solid $alabaster;
  background: $white;

  &.small {
    width: 32px;
    height: 32px;
  }

  &.medium {
    width: 35px;
    height: 35px;
  }

  &:hover {
    background: $alabaster;
  }
}
</style>
