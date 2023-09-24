<template>
  <div class="about">
    <h1>This is an about page {{ $route.params.member }}</h1>
    <p> {{ store.counter }} </p>
    <p> {{ store.doubleCount }} </p>
    <button @click="store.increment">Button</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useCounterStore } from '@/stores/counter';

export default {
  setup() {
    const route = useRoute(); //this.$route
    const router = useRouter(); //this.$router
    const store = useCounterStore();

    console.log(route.params.member);
    console.log('router', router);

    router.push({
      hash: '#test'
    });

    return { store };
  }
}
</script>