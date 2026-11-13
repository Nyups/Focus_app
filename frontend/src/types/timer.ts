// The export keyword allow us to export variable and function, just like JavaScript
import {ref} from 'vue';

export const defaultTime: number = 1200;
export const breakTime = ref<number>(600); // 5 seconds break time

// double time function
export function doubleTime(seconds: number) {
  return seconds * 2
}



// format time function
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return `${minutes}:${remainingSeconds}`
}
