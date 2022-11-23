# Vue3 Number Increment

基于vue3的一个数字增长的动画组件

### 安装
`npm install vue-number-increment`  
或  
`yarn add vue-number-increment`

### 使用
```javascript 
import {ref} from 'vue'
import NumberIncrement from 'vue-number-increment'

const number = ref(9527)
const handleIncrementEnd = (endValue: number) => {
    console.log('动画已完成', endValue)
}
// to: 目标数字
// speed: 增长速度, 1-10;
// callback: 动画完成后回调
<template>
    <NumberIncrement :to={number} :speed="5" @callback="handleIncrementEnd" />
</template>
```