<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'Загрузка, пожалуйста подождите.',
    },
  });
</script>

<template>
  <transition
    name="loader"
    :duration="{
      enter: 250,
      leave: 0,
    }"
  >
    <div class="loader">
      <svg class="loader__icon"  viewBox="25 25 50 50">
        <title>{{ label }}</title>

        <circle
          class="loader__circle"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="currentColor"
          :stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    overflow: hidden;

    transition: opacity 100ms ease-in-out;

    color: $curious-blue;
    opacity: 1;
    background-color: transparent;

    &-enter-active,
    &-leave-active {
      opacity: 0;
    }

    &__icon {
      width: 50px;
      height: 50px;
      margin: auto;

      animation: rotate 2s linear infinite;
      transform-origin: center;
    }

    &__circle {
      animation: dash 1.5s ease-in-out infinite;

      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
</style>
