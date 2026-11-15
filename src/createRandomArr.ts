export function createRandomArr(length: number, max: number): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
}
