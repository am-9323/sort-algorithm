export function mergeSort(arr: number[]): number[] {
  // 配列長が1以下ならそのまま返す
  if (arr.length <= 1) {
    return arr;
  }
  //　半分に分けてmergeSortする
  const centerPos = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, centerPos));
  const right = mergeSort(arr.slice(centerPos));
  // mergeする
  return merge(left, right);
}

function merge(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];

  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length || index2 < arr2.length) {
    // 先頭から1つずつ取り出して比較し配列に格納
    const target1 = arr1[index1];
    const target2 = arr2[index2];

    if (target1 === undefined || target2 < target1) {
      result.push(target2);
      index2++;
    } else if (target2 === undefined || target1 <= target2 ) {
      result.push(target1);
      index1++;
    }
  }

  return result;
}
