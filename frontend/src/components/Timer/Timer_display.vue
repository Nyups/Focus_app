<script setup lang="ts">
import { ref } from 'vue'; // Classic vue stuff too

defineProps<{
  timeLeft: number; // expect a number
}>();
// We get the variable we passed in the parent via "defineProps"


const emit = defineEmits <{
  reset: [];
  addTime: [];
}>();
// The empty array means that this event doesn't carry any argument,
// Basically this function is just here to send the emit

</script>

<template>
  <h2>Remaining seconds : {{ timeLeft }}</h2>
  <button @click="emit('reset')">Reset</button>
  <button @click="emit('addTime')">Double</button>
  <!--
  emit('reset') : trigger the "@reset="resetTimer" passed in this component from the parent
  -->
</template>

<style scoped></style>
