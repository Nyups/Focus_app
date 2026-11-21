<script setup lang="ts">
import { computed, ref } from 'vue';

defineProps<{
  presetWindow: boolean;
}>();

const focusTimeInput = ref(25);
const breakTimeInput = ref(5);
const validUserPreset = computed(() =>
  Number.isFinite(focusTimeInput.value) &&
  focusTimeInput.value > 0 &&
  Number.isFinite(breakTimeInput.value) &&
  breakTimeInput.value > 0
);

const emit = defineEmits<{
  'short-preset': [];
  'long-preset': [];
  'user-input-preset': [focusTime: number, breakDuration: number];
}>();


</script>

<template>
<div class="preset-container">
  <h2>Preset component</h2>
 <div class="short-preset">
  <h3>Short Preset</h3>
  <p>25 minutes focus, 5 minutes break</p>
  <button class="button" @click="emit('short-preset')">Set Short Preset</button>
 </div>

 <div class="long-preset">
  <h3>Long Preset</h3>
  <p>50 minutes focus, 10 minutes break</p>
  <button class="button" @click="emit('long-preset')">Set Long Preset</button>
 </div>

  <div class="user-input-preset">
    <h3>User Input Preset</h3>
    <p>Set your own focus and break times</p>
    <label for="focus-time">Focus Time (minutes):</label>
    <input type="number" min="1" v-model.number="focusTimeInput" />
    <br/>
    <label for="break-time">Break Time (minutes):</label>
    <input type="number" min="1" v-model.number="breakTimeInput" />
    <button
      class="button"
      :disabled="!validUserPreset"
      @click="emit('user-input-preset', focusTimeInput, breakTimeInput)"
    >
      Set session
    </button>
    </div>
</div>
</template>

<style scoped>
.preset-container {
  display: grid;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: scroll;
  background: rgb(255, 255, 255); /* I'll change it later */
  overflow: scroll;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 1);
  border-radius: 10px;
  text-align: center;
  color: black;
  text-shadow: 0 0 10px white;
}

.button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(247, 249, 244, 0.6);
  border-radius: 10px;
  color: black;
  box-shadow: 0 4px 6px rgb(3, 3, 3);
  border: none;
  width: 70%;
}
</style>
