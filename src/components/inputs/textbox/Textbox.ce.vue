<template>
  <div class="textbox-grid" :class="`textbox-grid--${labelPosition}`">
    <label
      for="textbox"
      v-if="label && labelPosition !== 'none'"
      class="textbox-label"
      :class="`textbox-label-position--${labelPosition}`"
      >{{ label }}</label
    >
    <input type="text" :placeholder="placeholder" id="textbox" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  labelPosition: {
    type: String,
    default: 'above',
  },
});
</script>

<style lang="scss" src="./textbox.scss" />
