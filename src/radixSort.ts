export function radixSort(arr: number[]): number[] {
  // 引数に負の値がある場合は、最小値を0として後から引く
  const min = Math.min(...arr);
  let adjustNum = 0;
  if (min < 0) {
    adjustNum = -min;
    arr = arr.map(v => v + adjustNum);
  }
  // 最大桁数
  const maxDigits = Math.max(...arr).toString().length;

  for (let i = 0; i < maxDigits; i++) {
    // 0〜9 を格納する配列
    const digitBoxes: number[][] = Array.from({ length: 10 }, _ => Array());
    for (const num of arr) {
      // 桁の値を取り出し、その値のを配列のインデックスとして元の数を配列に格納
      const digit = Math.floor(num / (10 ** (i)) % 10);
      digitBoxes[digit].push(num);
    }
    arr = digitBoxes.flatMap(v => v);
  }

  if (min < 0) {
    return arr.map(v => v - adjustNum);
  }
  return arr;
}
