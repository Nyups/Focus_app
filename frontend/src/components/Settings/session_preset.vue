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
    <input type="number" min="1" v-model.number="focusTimeInput" placeholder="Focus Time (minutes)" />
    <input type="number" min="1" v-model.number="breakTimeInput" placeholder="Break Time (minutes)" />
    <button
      :disabled="!validUserPreset"
      @click="emit('user-input-preset', focusTimeInput, breakTimeInput)"
    >
      Set User Input Preset
    </button>
    </div>
</div>
</template>

<style scoped>
.preset-container {
  position: absolute;
  right: 0;
  top: 30%;
  width: 250px;
  height: 80%;
  background: rgb(62, 67, 96, 0.8); /* I'll change it later */
  padding: 20px;
  z-index: 10;
  overflow: scroll;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 1);
  border-radius: 10px;
  text-align: center;
}
</style>
