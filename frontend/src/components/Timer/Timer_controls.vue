<script setup lang="ts">
defineProps<{
  timeLeft: number; // expect a number
}>();


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
.controls { /* Buttons area */
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(247, 249, 244, 0.6);
  border-radius: 10px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 1);
  width: 90%;


}

.control { /* Button */
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(247, 249, 244, 0.6);
  border-radius: 10px;
  color: black;
  box-shadow: 0 4px 6px rgb(3, 3, 3);
  border: none;
  width: 70px;
}

.control:hover {
  background-color: white;
}
</style>
