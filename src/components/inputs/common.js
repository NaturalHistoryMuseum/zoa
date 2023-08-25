import { debounce } from 'dettle';
import { computed } from 'vue';

export function useChangeEmits(emit, props) {
  /**
   * Defines common emit functions for when inputs change.
   * @param emit - The emit object returned by defineEmits in <script setup>.
   * @param props - The props object returned by defineProps.
   */
  let delay;
  try {
    delay = parseInt(props.delay) || 0;
  } catch {
    delay = 0;
  }

  function _emitChange(newValue) {
    emit('change', newValue);
  }

  const emitChange = debounce(_emitChange, delay);

  function valueChanged(newValue) {
    emit('update:modelValue', newValue);
    emitChange(newValue);
  }

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(newValue) {
      valueChanged(newValue);
    },
  });

  return { emitChange, valueChanged, value };
}
