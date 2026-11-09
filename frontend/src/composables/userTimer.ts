
import { ref } from 'vue';
import { defaultTime, doubleTime } from '../types/timer';

export function useTimer() {

    // Reactive variables
    const timeLeft = ref<number>(defaultTime);
    const playStatus = ref(false);

    // Interval management
    let timerInterval: ReturnType<typeof setInterval> | null = null;

    // Add time
    function addTime() {
        timeLeft.value = doubleTime(timeLeft.value);
    }

    // Reset timer
    function resetTimer() {
        pause();
        timeLeft.value = defaultTime;
    }

    // Start timer
    function start() {
        if (timerInterval !== null || timeLeft.value <= 0) return;

        playStatus.value = true;

        timerInterval = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                pause();
            }
        }, 1000);
    }

    // Pause timer
    function pause() {
        playStatus.value = false;

        if (timerInterval !== null) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // Export everything we want to use
    return {
        timeLeft,
        playStatus,
        addTime,
        resetTimer,
        start,
        pause
    };
}
