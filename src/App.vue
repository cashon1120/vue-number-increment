<script setup lang="ts">
import { ref } from "vue";
import NumberIncrement from "./lib/index";

const number = ref(0);
const speed = ref(10)

const handleAnimationEnd = (endValue: number) => {
  console.log('animation end', endValue);
};
const handlIncrement = () => {
  number.value += 128;
};
const handlReduction = () => {
  number.value -= 128;
};

const change = (e: any) => {
  speed.value = e.target.value
}
</script>

<template>
  <div class="outer">
    <div class="wrapper">
      speed: &nbsp;<input min="1" max="10" :value="speed" id="range" @input="change" type="range" /> &nbsp;<span>{{speed}}</span>
    </div>
    <div class="wrapper">
      <button @click="handlReduction" data-testid="reduction">-</button>
      <div class="count" data-testid="number">
        <NumberIncrement
          :to="number"
          :speed="speed"
          @callback="handleAnimationEnd"
        />
      </div>
      <button @click="handlIncrement" data-testid="increment">+</button>
    </div>
  </div>
</template>

<style>
.outer {
  padding: 60px;
}
.wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
button {
  font-size: 20px;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: #fafafa;
  border: 1px solid #ddd;
  color: #999;
}
.count {
  width: 180px;
  font-size: 48px;
  color: #000;
  text-align: center;
}
</style>
