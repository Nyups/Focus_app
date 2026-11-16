<script setup lang="ts">
// Component imports
import Timer_display from './components/Timer/Timer_display.vue';
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
    currentDuration,
    playInfo,
    sessionCount,
    resetTimer,
    addTime,
    start,
    pause,
    shortPreset,
    longPreset,
    userInputPreset,
    playStatus
} = useTimer();

const presetWindow = ref(false);

function togglePresetWindow() {
  presetWindow.value = !presetWindow.value;
}

</script>
<template>
  <div class="heading">
    <h1>Pomodoro Timer</h1>
    <button @click="togglePresetWindow" class="preset-btn">Preset</button>
  </div>


<Timer_display
class="timer-display"
:play-status="playStatus"
:time-left="timeLeft"
:duration="currentDuration"
:format-time="formatTime"
:play-info="playInfo"
@reset="resetTimer"
@addTime="addTime"
@start="start"
@pause="pause"
/>

<!--
<Timer_controls
:time-left="timeLeft"
@reset="resetTimer"
@addTime="addTime"
@start="start"
@pause="pause"
/>
-->

<session_counter
:session-count="sessionCount"/>


<transition name="slide">
<session_preset
v-if="presetWindow"
:preset-window="presetWindow"
@short-preset="shortPreset"
@long-preset="longPreset"
@user-input-preset="userInputPreset"
/>
</transition>

</template>

<style scoped>
.heading {
  text-align: center;
}

.timer-display {
  margin: 20px auto;
}

/* animation */
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}
</style>
