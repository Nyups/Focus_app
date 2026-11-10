<script setup lang="ts">
import { ref } from 'vue'; // Classic vue stuff too

defineProps<{
  timeLeft: number;
  formatTime: (time: number) => string;
  playInfo: string;
}>();
// We get the variable we passed in the parent via "defineProps"

</script>

<template>
  <section class="timer-display">
  <h2 class="title">Remaining Time</h2>
  <h1 class="time">{{ formatTime(timeLeft) }}</h1>
  <h2 class="play-info">{{ playInfo }}</h2>
  <!--
  emit('reset') : trigger the "@reset="resetTimer" passed in this component from the parent
  -->
  </section>
</template>

<style scoped>
.time {
  font-size: 4em;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
}
.play-info {
  text-align: center;
  font-size: 1.5em;
  margin-top: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.timer-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: rgb(62, 67, 96);
  border-radius: 10px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 1);
}
</style>
