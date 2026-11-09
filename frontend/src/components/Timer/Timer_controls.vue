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
// Basically this function is just here to send the emit
</script>

<template>
  <h2>Timer control</h2>
  <button @click="emit('reset')">Reset</button>
  <button @click="emit('addTime')">Double</button>
  <button @click="emit('start')">Start</button>
  <button @click="emit('pause')">Pause</button>
</template>

<style scoped></style>
