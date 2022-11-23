<script setup lang="ts">
import {ref} from 'vue'
import NumberIncrement from './lib/NumberIncrement.vue'
const number = ref('9527a')
const handleIncrementEnd = (endValue: number) => {
  console.log(endValue)
}
const handlIncrement = () => {
  number.value += 256
}
</script>

<template>
  <NumberIncrement :to="number" speed="10" @callback="handleIncrementEnd"/> <br />
  <button @click="handlIncrement">增加</button>
</template>

