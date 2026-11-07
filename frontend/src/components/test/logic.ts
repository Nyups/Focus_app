// The export keyword allow us to export variable and function, just like JavaScript
export const defaultTime: number = 25 * 60;

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return `${minutes}:${remainingSeconds}`
}
