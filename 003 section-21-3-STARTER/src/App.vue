<template>
  <div>
    <p>num: {{ num }}</p>
    <p>double: {{ double }}</p>
    <button @click.prevent="increment">click</button>

    <p>{{ name }}</p>
    <hr>
    <p>
      <input type="text" v-model="pharse">
    </p>
    <p>
      reversedPharse: {{ reversedPharse }}
    </p>
    <hr>
    <app-alert :user="user"/>
    <hr>
    <button type="button" ref="btn">button</button>
  </div>
</template>

<script>
import { 
  ref, 
  reactive, 
  toRefs, 
  onBeforeMount,
  onMounted,
} from "vue";

import AppAlert from '@/components/Alert.vue';

import { useNumber } from '@/hooks/number';
import { usePhase } from '@/hooks/phase';

export default {
  name: "App",
  components: {
    AppAlert
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');

      btn.value.addEventListener('click', () => {
        console.log('button click');
      });
    });
    const user = reactive({
      name: "jonn",
      age: 20,
    });

    //hook useNumbre
    // let num = ref(0);
    // function increment() {
    //   num.value++;
    // }
    // const double = computed(() => {
    //   return num.value * 2;
    // });
    const { num, increment, double} = useNumber();

    setTimeout(() => {
      user.name = 'test';
    }, 3000);

    // const pharse = ref("");
    // const reversedPharse = ref("");
    // watchEffect(() => {
    //   reversedPharse.value = pharse.value.split("").reverse().join("");
    // });
    // watch([pharse], (newVal, oldVal) => {
    //   console.log('watch', 'oldVal: ', oldVal,  'newVal: ', newVal);
    //   // reversedPharse.value = pharse.value.split("").reverse().join("");
    // });
    const { pharse, reversedPharse } = usePhase();

    return {
      num,
      ...toRefs(user),
      increment,
      pharse,
      reversedPharse,
      double,
      user,
      btn,
    }
  }
};
</script>
