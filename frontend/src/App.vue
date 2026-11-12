<script setup lang="ts">

// Component imports
import Timer_display from './components/Timer/Timer_display.vue';
import Timer_controls from './components/Timer/Timer_controls.vue';
import Session_counter from './components/Timer/Session_counter.vue';
import session_preset from './components/Settings/session_preset.vue';
import { ref } from 'vue';
// Utility imports
import { formatTime } from './types/timer.ts';

// Composable imports
import { useTimer } from './composables/userTimer.ts';

// Grab the said variables and functions from the composable (userTimer.ts) (aaaaw)
const {
    timeLeft,
    playInfo,
    sessionCount,
    addTime,
    resetTimer,
    start,
    pause,
    shortPreset,
    longPreset,
    userInputPreset
} = useTimer();

const presetWindow = ref(false);

function togglePresetWindow() {
  presetWindow.value = !presetWindow.value;
}

</script>
<template>
  <div class="heading">
    <h1>Pomodoro Timer</h1>
    <button @click="togglePresetWindow">Preset</button>
  </div>
<Timer_display
:time-left="timeLeft"
:format-time="formatTime"
:play-info="playInfo"
/>
<!--why is it red :C-->
<Timer_controls
:time-left="timeLeft"
@reset="resetTimer"
@addTime="addTime"
@start="start"
@pause="pause"
/>

<session_counter
:session-count="sessionCount"/>

<session_preset
@short-preset="shortPreset"
@long-preset="longPreset"
@user-input-preset="userInputPreset"
/>
<!--
:time-left="timeLeft" :  Pass the variable "timeLeft" to the component
@rest="resetTimer" : Pass the function "resetTimer" to the component
-->
</template>

<style scoped></style>
