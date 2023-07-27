import { computed } from 'vue';

export function useKindIcon(props) {
  const icon = computed(() => {
    switch (props.kind) {
      case 'info':
        return 'fa-circle-info';
      case 'warning':
        return 'fa-circle-exclamation';
      case 'error':
        return 'fa-circle-xmark';
      case 'success':
        return 'fa-circle-check';
      default:
        return 'fa-circle-question';
    }
  });

  return { icon };
}
