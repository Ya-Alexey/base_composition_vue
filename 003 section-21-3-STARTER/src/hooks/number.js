import { 
  ref, 
  computed,
} from "vue";

export const useNumber = () => {
  let num = ref(0);

  const double = computed(() => {
    return num.value * 2;
  });

  function increment() {
    num.value++;
  }

  return {
    num,
    increment,
    double,
  }
}