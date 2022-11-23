<template>
  {{ count }}
</template>
<script lang="ts" setup name="IncrementNumber">
import { ref, onMounted, watch } from "vue";
interface Props {
  to: number | string;
  speed?: number | string; // 递增速度，1 - 10, 越大速度越快
  callback?: (endValue: number) => void
}
const props = defineProps<Props>();
const emits = defineEmits(['callback'])
// 判断是否为数字
const checkIsNumber = (val?: number | string, name?: string) => {
  if(typeof val === 'number'){
    return val
  }
  if(isNaN(Number(val))){
    throw new Error(`属性 ${name} 的值必须为一个数字或者能转为(Number)数字的字符串`) 
  }else{
    return Number(val)
  }
}

const count = ref(0);
let animation: any = null;
// 计算每次递增量
const setStep = (to: number) => {
  const propSpeed = checkIsNumber(props.speed, 'speed')
  const speed = props.speed ? 12 - Math.min(10, propSpeed) : 5;
  return Math.floor((to - count.value) / (speed * 10));
};
// 增加数值，小数点根据to或者count.value本来的小数点位置来设置
const increment = (to: number, step: number, toFixedLength: number) => {
  let next = Number((count.value + step + Number(Math.random().toFixed(toFixedLength))).toFixed(toFixedLength));
  count.value = Math.min(next, to);
  if (next >= to) {
    count.value = to;
    emits('callback', count.value)
    cancelAnimationFrame(animation);
    return;
  }
  animation = requestAnimationFrame(() => increment(to, step, toFixedLength));
};
const initAndIncrement = () => {
  cancelAnimationFrame(animation);
  const to = checkIsNumber(props.to, 'to');
  const step = setStep(to);
  // toFixedLength:小数点位数，根据to或者count.value本来的小数点位数取最大，但最多两位
  const toDecimalLength = to.toString().split(".")[1]?.length || 0;
  const countDecimalLength = count.value.toString().split(".")[1]?.length || 0;
  const toFixedLength = Math.min(2, Math.max(toDecimalLength, countDecimalLength));
  const _to = Number(to.toFixed(toFixedLength));
  animation = requestAnimationFrame(() => increment(_to, step, toFixedLength));
};
watch(props, () => {
  initAndIncrement();
});
onMounted(() => {
  initAndIncrement();
});
</script>
