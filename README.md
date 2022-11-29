# Number Increment Animation

Vue(version >= 3.2.4) number increment animation component

### install
`npm install vue-number-increment`  
or  
`yarn add vue-number-increment`

[DEMO](https://increment.hi515.cn)
### use
```javascript 
import {ref} from 'vue'
import NumberIncrement from 'vue-number-increment'

const number = ref(128)
const speed=ref(5)

const handleAnimationEnd = (endValue: number) => {
    console.log('animation end', endValue)
}
// to: target number(value must be a number)
// speed: animation speed(1-10) and default value is 5;
<template>
    <NumberIncrement :to="number" :speed="speed" @callback="handleAnimationEnd" />
</template>
```