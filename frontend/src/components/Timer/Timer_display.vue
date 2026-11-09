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
  <h2>Remaining Time</h2>
  <h1>{{ formatTime(timeLeft) }}</h1>
  <h2>{{ playInfo }}</h2>
  <!--
  emit('reset') : trigger the "@reset="resetTimer" passed in this component from the parent
  -->
</template>

<style scoped></style>
