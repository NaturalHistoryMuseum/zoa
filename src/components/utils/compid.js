import { nanoid } from 'nanoid';
import { ref } from 'vue';

export function useComponentId() {
  const componentId = ref(nanoid(6));

  function subId(name) {
    return `${componentId.value}__${name}`;
  }

  return { componentId, subId };
}
