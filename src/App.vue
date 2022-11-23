<script setup lang="ts">
import {ref} from 'vue'
import NumberIncrement from 'vue-number-increment'
console.log(NumberIncrement)
const number = ref(9527)
const handleIncrementEnd = (endValue: number) => {
  console.log(endValue)
}
const handlIncrement = () => {
  number.value += 256
}
</script>

<template>
  <NumberIncrement :to="number" :speed="10" @callback="handleIncrementEnd"/> <br />
  <button @click="handlIncrement">增加</button> 123
</template>

