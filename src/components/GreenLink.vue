<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    tag: {
      type: String,
      default: 'a',
    },
    href: String,
    back: {
      type: Boolean,
      default: false,
    },
    text: String,
  });

  const classes = computed(() => {
    return {
      back: props.back,
    };
  });
</script>

<template>
  <component :is="tag" class="green-link" :class="classes" :href="href">
    <span class="green-link__text" :class="classes">{{ text }}</span>

    <img class="green-link__icon" :class="classes" src="/arrow-next.svg" width="16" height="14" alt="Стрелка направо">
  </component>
</template>

<style lang="scss" scoped>
.green-link {
  position: relative;

  font-size: 16px;
  line-height: 19px;
  font-weight: $font-weight-semibold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 55px;

  color: $white;
  background-color: $conifer;
  border-radius: 18px;

  &:hover {
    background-color: $sushi;
  }

  &.back {
    width: 245px;
  }

  &__text {
    &.back {
      margin-left: 20px;
    }
  }

  &__icon {
    position: absolute;
    right: 33px;
    top: 21px;

    &.back {
      right: auto;
      left: 30px;

      transform: rotate(180deg);
    }
  }
}
</style>
