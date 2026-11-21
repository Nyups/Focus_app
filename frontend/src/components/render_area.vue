<script setup lang="ts">
// Component imports
import Timer_display from '../components/Timer/Timer_display.vue';
import Session_counter from '../components/Timer/Session_counter.vue';
import session_preset from '../components/Settings/session_preset.vue';
import task_view from './tasks/task_view.vue';
import notes_view from './notes/notes_view.vue';

import { ref } from 'vue';
// Utility imports
import { formatTime } from '../types/timer.ts';

// Composable imports
import { useTimer } from '../composables/userTimer.ts';

const {
    timeLeft,
    currentDuration,
    playInfo,
    sessionCount,
    studyTime,
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
const statisticsWindow = ref(false);

// function togglePresetWindow() {
//   presetWindow.value = !presetWindow.value;
// }


</script>
<template>

<div class="dashboard">
  <div class="top-row">
    <div class="timer-column">
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

      <session_counter
        v-if="statisticsWindow"
        class="statistics"
        :session-count="sessionCount"
        :study-time="studyTime"
      />
    </div>

<session_preset
:preset-window="presetWindow"
@short-preset="shortPreset"
@long-preset="longPreset"
@user-input-preset="userInputPreset"
/>

<task_view />
  </div>

  <notes_view />
</div>


</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 20px;
  margin: 20px;
}

.top-row :deep(.timer-display),
.top-row :deep(.preset-container),
.top-row :deep(.render) {
  width: 100%;
  margin: 0;
}


.heading {
  text-align: center;
}

.timer-display {
  height: 100%;
}

.settings {
  display: flex;
  background-color: white;
  width: 80%;
  justify-content: center;
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
