import { debounce } from 'dettle';

export function useChangeEmits(emit, delay) {
  /**
   * Defines common emit functions for when inputs change.
   * @param emit - The emit object returned by defineEmits in <script setup>.
   * @param {number} delay - The debounce delay for emitting the 'change' event.
   */
  try {
    delay = parseInt(delay) || 0;
  } catch {
    delay = 0;
  }

  function _emitChange(event) {
    emit('change', event);
  }

  const emitChange = debounce(_emitChange, delay);

  function valueChanged(event) {
    emit('update:modelValue', event.target.value);
    emitChange(event);
  }

  return { emitChange, valueChanged };
}
