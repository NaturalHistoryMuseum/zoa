<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss" src="./textbox.scss" />
