<script setup lang="ts">
import { computed } from 'vue';
import Timer_controls from './Timer_controls.vue';
import scubaGif from '../../asset/texture/scuba.gif';

const props = defineProps<{
  timeLeft: number;
  duration: number;
  formatTime: (time: number) => string;
  playInfo: string;
  playStatus: boolean;
}>();

const emit = defineEmits<{
  reset: [];
  addTime: [];
  start: [];
  pause: [];
}>();

const progress = computed(() => {
  if (props.duration <= 0) return 0;

  return Math.min(
    100,
    Math.max(0, ((props.duration - props.timeLeft) / props.duration) * 100)
  );
});

</script>

<template>
  <section class="timer-display">
  <h2 class="title">Remaining Time</h2>
  <h1 class="time">{{ formatTime(timeLeft) }}</h1>

<Transition name="cat">
  <img
    v-if="playStatus"
    :src="scubaGif"
    alt="elgato"
    class="scuba-gif"
  />
</Transition>


 <div class="progress-container">
    <div
      class="progress-fill"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>



  <h2 class="play-info">{{ playInfo }}</h2>
  <!--
  emit('reset') : trigger the "@reset="resetTimer" passed in this component from the parent
  -->

  <Timer_controls
  class="controls"
:time-left="timeLeft"
@reset="emit('reset')"
@addTime="emit('addTime')"
@start="emit('start')"
@pause="emit('pause')"
/>
  </section>
</template>

<style scoped>
.time {
  font-size: 4em;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  color: white;
}
.play-info {
  text-align: center;
  font-size: 1.5em;
  margin-top: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  color: white;
}

.timer-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 249, 244);
  border-radius: 10px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 1);
  width: 30%;
  height: auto;
  color: white;
}


.progress-container {
  width: 90%;
  height: 10px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  width: 50%;
  height: 100%;
  background: #66ccff;
  border-radius: inherit;
}

.controls {
  margin-bottom: 20px;
}

.scuba-gif {
  background-color: rgb(247, 249, 244, 0.6);
  border-radius: 10px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 1);
  margin-bottom: 20px;
}

.cat-enter-active,
.cat-leave-active {
  transition: opacity 350ms ease, transform 350ms ease;
}

.cat-enter-from,
.cat-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.92);
}

.cat-enter-to,
.cat-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

</style>
