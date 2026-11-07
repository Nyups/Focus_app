<script setup lang="ts">
// Component import war zone
import Timer_display from './components/Timer/Timer_display.vue';

// Vue stuff import
import { ref, computed } from 'vue'; // Classic vue stuff
import { defaultTime, formatTime, doubleTime } from './types/timer.ts'; // Import variable and function from the timer.ts file

// TEST AAAAAAAAAAAA
// Classic variable declaration in Ts (waw)
const timeLeft = ref<number>(defaultTime)


// Adding time function
function addTime() {
  console.log('triggered')
  
} // pray


// Function to reset the timer
function resetTimer() {
  timeLeft.value = defaultTime
}

/* [Random Ts test]
import { computed, ref } from 'vue';

const timeLeft = ref(1250);

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = String(timeLeft.value % 60).padStart(2, '0');

  return `${minutes}:${seconds}`;
});
*/
</script>

<template>
<h1>{{ formatTime(timeLeft) }}</h1>

<Timer_display
:time-left="timeLeft"
@reset="resetTimer"
@addTime="addTime"
/>
<!--
:time-left="timeLeft" :  Pass the variable "timeLeft" to the component
@rest="resetTimer" : Pass the function "resetTimer" to the component
-->
</template>

<style scoped></style>
