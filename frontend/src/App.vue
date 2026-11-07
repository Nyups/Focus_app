<script setup lang="ts">
// Component import war zone
import Timer_display from './components/Timer/Timer_display.vue';

// Vue stuff import
import { ref, computed } from 'vue'; // Classic vue stuff
import { defaultTime, formatTime, doubleTime } from './types/timer.ts'; // Import variable and function from the timer.ts file

// TEST AAAAAAAAAAAA
// Classic variable declaration in Ts (waw)
const timeLeft = ref<number>(defaultTime)
const tic = ref(1000)


// Adding time function
function addTime() {
  console.log('triggered')
  timeLeft.value = doubleTime(timeLeft.value)
} // In the end I forgot to return the result and the .value (help)


// Function to reset the timer
function resetTimer() {
  timeLeft.value = defaultTime
}

// Start function
function start() {
  console.log('triggered start')
  setInterval(function second() {
    if(timeLeft.value < 1) {
      return
    } else {
      timeLeft.value--
    }
    return
  }, 1000)
}

</script>

<template>
<h1>{{ formatTime(timeLeft) }}</h1>

<Timer_display
:time-left="timeLeft"
@reset="resetTimer"
@addTime="addTime"
@start="start"
/>
<!--
:time-left="timeLeft" :  Pass the variable "timeLeft" to the component
@rest="resetTimer" : Pass the function "resetTimer" to the component
-->
</template>

<style scoped></style>
