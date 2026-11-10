<script setup lang="ts">
defineProps<{
  timeLeft: number; // expect a number
}>();
// We get the variable we passed in the parent via "defineProps"


const emit = defineEmits <{
  reset: [];
  addTime: [];
  start: [];
  pause: [];
}>();
// The empty array means that this event doesn't carry any argument,
// Basically this function is just here to send the emit tada
</script>

<template>
  <section class="controls">
  <button class="control" @click="emit('reset')">Reset</button>
  <button class="control" @click="emit('addTime')">Double</button>
  <button class="control" @click="emit('start')">Start</button>
  <button class="control" @click="emit('pause')">Pause</button>
  </section>
</template>

<style scoped>
.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: rgb(62, 67, 96);
  border-radius: 10px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 1);
}

.control {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(44, 48, 68);
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 1);
  border: none;
}

.control:hover {
  background-color: rgb(255, 213, 220);
}
</style>
