<template>
  <div v-if="!flag">
    Name changed
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    user: Object,
  },
  setup(props, context) {
    // context.emit('eventName', {});

    const flag = computed(() => {
      return props.user.name === 'jonn';
    });

    return {
      flag
    }
  }
}
</script>