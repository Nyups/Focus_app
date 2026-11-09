<script setup lang="ts">
import { ref } from 'vue'; // Classic vue stuff too

defineProps<{
  timeLeft: number; // expect a number
}>();
// We get the variable we passed in the parent via "defineProps"

</script>

<template>
  <h2>Timer display</h2>
  <h2>Remaining seconds : {{ timeLeft }}</h2>
  <!--
  emit('reset') : trigger the "@reset="resetTimer" passed in this component from the parent
  -->
</template>

<style scoped></style>
