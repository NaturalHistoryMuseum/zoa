<template>
  <div class="zoa-textbox-grid" :class="`zoa-textbox-grid--${labelPosition}`">
    <label
      for="textbox"
      v-if="label && labelPosition !== 'none'"
      class="zoa-textbox-label"
      :class="`zoa-textbox-label-position--${labelPosition}`"
      >{{ label }}</label
    >
    <input type="text" :placeholder="placeholder" id="textbox" />
  </div>
</template>

<script setup>
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
