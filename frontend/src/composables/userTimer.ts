// I have to remember it work despite this file being a TS file.
import { ref } from 'vue';
// Function from timer.ts
import { defaultTime, doubleTime } from '../types/timer';

export function useTimer() {


    const timeLeft = ref<number>(defaultTime);
    const playStatus = ref(false);
    const playInfo = ref<string>('Waiting...');

    // Interval management
    let timerInterval: ReturnType<typeof setInterval> | null = null;


    function addTime() {
        timeLeft.value = doubleTime(timeLeft.value);
    }


    function resetTimer() {
        pause();
        timeLeft.value = defaultTime;
        playInfo.value = 'Waiting...';
    }


    function start() {
        if (timerInterval !== null || timeLeft.value <= 0) return;

        playStatus.value = true;
        playInfo.value = 'Playing...';

        timerInterval = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                pause();
            }
        }, 1000);
    }


    function pause() {
        playStatus.value = false;
        playInfo.value = 'Paused';

        if (timerInterval !== null) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // Export everything we want to use
    return {
        timeLeft,
        playStatus,
        playInfo,
        addTime,
        resetTimer,
        start,
        pause
    };
}
