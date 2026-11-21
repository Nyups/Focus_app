<script lang="ts" setup>
import { formatTime } from '../../types/timer';


defineProps<{
  sessionCount: number;
  studyTime: number;
}>();



</script>

<template>
  <div class="Statistics">
    <h1>Statistics</h1>
    <h2>Sessions completed: {{ sessionCount }}</h2>
    <h2>Total studied time: {{ formatTime(studyTime) }}</h2>
  </div>
</template>

<style scoped>
.Statistics {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  background-color: #f5f5f5;
  color: #333;
  width: 80%;
  border-radius: 10px;
}
</style>
