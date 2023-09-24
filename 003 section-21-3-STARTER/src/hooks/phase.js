import { 
  ref, 
  watchEffect,
  watch, 
} from "vue";

export const usePhase = () => {
  const pharse = ref("");
  const reversedPharse = ref("");
  watchEffect(() => {
    reversedPharse.value = pharse.value.split("").reverse().join("");
  });
  watch([pharse], (newVal, oldVal) => {
    console.log('watch', 'oldVal: ', oldVal,  'newVal: ', newVal);
  });

  return {
    pharse,
    reversedPharse,
  }
}