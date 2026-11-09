<script setup lang="ts">

// Component imports
import Timer_display from './components/Timer/Timer_display.vue';
import Timer_controls from './components/Timer/Timer_controls.vue';

// Utility imports
import { formatTime } from './types/timer.ts';

// Composable imports
import { useTimer } from './composables/userTimer.ts';

// Grab the said variables and functions from the composable (userTimer.ts) (aaaaw)
const {
    timeLeft,
    playStatus,
    playInfo,
    addTime,
    resetTimer,
    start,
    pause
} = useTimer();

</script>

<template>
<Timer_display
:time-left="timeLeft"
:format-time="formatTime"
:play-info="playInfo"
/>
<!--why is it red :C-->
<Timer_controls
@reset="resetTimer"
@addTime="addTime"
@start="start"
@pause="pause"
/>
<!--
:time-left="timeLeft" :  Pass the variable "timeLeft" to the component
@rest="resetTimer" : Pass the function "resetTimer" to the component
-->
</template>

<style scoped></style>
