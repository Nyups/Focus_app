<script setup lang="ts">
import { useTimer } from '../../composables/userTimer.ts';

const {
    timeLeft,
    breakTime
} = useTimer();

const emit = defineEmits<{
  'short-preset': [];
  'long-preset': [];
  'user-input-preset': [focusTime: number, breakTime: number];
}>();


</script>

<template>
 <h2>Preset component</h2>
<div class="preset-container">
 <div class="short-preset">
  <h3>Short Preset</h3>
  <p>25 minutes focus, 5 minutes break</p>
  <button @click="emit('short-preset')">Set Short Preset</button>
 </div>

 <div class="long-preset">
  <h3>Long Preset</h3>
  <p>50 minutes focus, 10 minutes break</p>
  <button @click="emit('long-preset')">Set Long Preset</button>
 </div>

  <div class="user-input-preset">
    <h3>User Input Preset</h3>
    <p>Set your own focus and break times</p>
    <input type="number" v-model.number="timeLeft" placeholder="Focus Time (minutes)" />
    <input type="number" v-model.number="breakTime" placeholder="Break Time (minutes)" />
    <button @click="emit('user-input-preset', timeLeft, breakTime)">Set User Input Preset</button>
    </div>
</div>
</template>

<style scoped>

</style>
