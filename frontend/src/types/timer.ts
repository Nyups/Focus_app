// The export keyword allow us to export variable and function, just like JavaScript
export const defaultTime: number = 10;

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
