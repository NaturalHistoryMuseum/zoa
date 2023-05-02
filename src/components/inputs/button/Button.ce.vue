<template>
  <button class="button" :class="`button-kind--${kind}`">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  kind: {
    type: String,
    default: 'normal',
  },
  label: {
    type: String,
    default: 'Button',
  },
});
</script>

<style lang="scss" src="./button.scss" />
