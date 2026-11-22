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
    <div class="timer-cell">
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

    <div class="preset-cell">
      <session_preset
        :preset-window="presetWindow"
        @short-preset="shortPreset"
        @long-preset="longPreset"
        @user-input-preset="userInputPreset"
      />
    </div>

    <div class="task-cell">
      <task_view />
    </div>

    <div class="notes-cell">
      <notes_view />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    "timer preset task"
    "notes notes task";
  width: 100%;
}

.timer-cell {
  grid-area: timer;
  min-width: 0;
  margin: 20px 20px;
  max-height: 625px;
  min-height: auto;
  min-width: 400px;
}

.preset-cell {
  grid-area: preset;
  min-width: 0;
  margin: 20px 20px 20px 0px;
}

.task-cell {
  grid-area: task;
  min-width: 0;
  margin: 0px 20px 40px 0px;
}

.notes-cell {
  grid-area: notes;
  min-width: 0;
  margin: 20px;
}

.dashboard :deep(.timer-display),
.dashboard :deep(.preset-container),
.dashboard :deep(.render),
.dashboard :deep(.notes) {
  width: 100%;
  margin: 0;
}

.dashboard :deep(.render) {
  height: 100%;
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
