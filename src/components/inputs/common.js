import { debounce } from 'dettle';
import { computed, ref } from 'vue';

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

  const internalModel = ref(null);

  function _emitChange(newValue) {
    emit('change', newValue);
  }

  function _updateModel(newValue) {
    emit('update:modelValue', newValue);
    internalModel.value = newValue;
  }

  const emitChange = debounce(_emitChange, delay);
  const updateModel = debounce(_updateModel, delay);

  function valueChanged(newValue) {
    updateModel(newValue);
    emitChange(newValue);
  }

  const value = computed({
    get() {
      if (props.modelValue === undefined) {
        // if there's no container or no v-model set, there won't be a ref to
        // hold this value, so we store it internally as a backup
        return internalModel.value;
      }
      return props.modelValue;
    },
    set(newValue) {
      valueChanged(newValue);
    },
  });

  return { emitChange, valueChanged, value };
}
