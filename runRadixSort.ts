import { createRandomArr } from "./src/createRandomArr.ts";
import { radixSort } from "./src/radixSort.ts";

export function execute() {
  let error = false;
  const target = process.argv[2] === "random"
    ? createRandomArr(Number(process.argv[3]), Number(process.argv[4]))
    : process.argv.slice(2).map(v => {
    const num = Number(v);
    if (isNaN(num)) {
      error = true;
    }
    return Number(v)
  });

  if (error) {
    console.error("Error:数字以外の値が含まれています。");
    return;
  }

  console.log(`ソート対象：${target}`)

  const start = performance.now()
  const result = radixSort(target);
  const end = performance.now()

  console.log(`ソート結果：${result}`);
  console.log(`実行時間：${(end-start).toFixed(5)} ms`);
}

execute();
