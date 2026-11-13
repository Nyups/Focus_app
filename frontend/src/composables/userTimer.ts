// I have to remember it work despite this file being a TS file.
import { ref } from 'vue';
import { defaultTime, doubleTime, breakTime } from '../types/timer';

export function useTimer() {


    const timeLeft = ref<number>(defaultTime);
    const focusDuration = ref<number>(defaultTime);
    const currentDuration = ref<number>(defaultTime);
    const playStatus = ref(false);
    const breakStatus = ref(false);
    const playInfo = ref<string>('Waiting for you!');
    const sessionCount = ref<number>(0);

    // Interval management
    let timerInterval: ReturnType<typeof setInterval> | null = null;

// Functionality area //////////////////////////////////////////////////
    function addTime() {
        currentDuration.value += timeLeft.value;
        timeLeft.value = doubleTime(timeLeft.value);
    }


    function resetTimer() {
        pause();
        breakStatus.value = false;
        timeLeft.value = focusDuration.value;
        currentDuration.value = focusDuration.value;
        playInfo.value = 'Waiting for you!';
    }

// I'll add sound later
    function start() {
        if (timerInterval !== null || timeLeft.value <= 0) return;

        playStatus.value = true;
        playInfo.value = 'Playing...';

        timerInterval = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                pause();
                sessionCount.value++;
                if (!breakStatus.value) {
                    breakStatus.value = true;
                    timeLeft.value = breakTime.value;
                    currentDuration.value = breakTime.value;
                    playInfo.value = 'Break time!';
                } else {
                    breakStatus.value = false;
                    timeLeft.value = focusDuration.value;
                    currentDuration.value = focusDuration.value;
                    playInfo.value = 'Waiting for you!';
                }
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

// Preset area ///////////////////////////////////////////////////////

function shortPreset() {
    resetTimer();
    focusDuration.value = 25 * 60;
    timeLeft.value = focusDuration.value;
    currentDuration.value = focusDuration.value;
    breakTime.value = 5 * 60;
}

function longPreset() {
    resetTimer();
    focusDuration.value = 50 * 60;
    timeLeft.value = focusDuration.value;
    currentDuration.value = focusDuration.value;
    breakTime.value = 10 * 60;
}

function userInputPreset(focusTime: number, breakTimeInput: number) {
    resetTimer();
    focusDuration.value = focusTime * 60; // Convert to seconds
    timeLeft.value = focusDuration.value;
    currentDuration.value = focusDuration.value;
    breakTime.value = breakTimeInput * 60; // Convert to seconds
}


// Export area /////////////////////////////////////////////////////
    return {
        timeLeft,
        currentDuration,
        playStatus,
        playInfo,
        sessionCount,
        addTime,
        resetTimer,
        start,
        pause,
        shortPreset,
        longPreset,
        userInputPreset,
        breakTime
    };
}
