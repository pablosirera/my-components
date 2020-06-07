<template>
  <button :class="theme">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    theme: {
      type: String,
      default: 'primary',
      validate: value => ['primary', 'secondary'].includes(value)
    }
  }
}
</script>

<style>
.primary {
  background-color: cornsilk;
}

.secondary {
  background-color: red;
  color: white;
}
</style>
