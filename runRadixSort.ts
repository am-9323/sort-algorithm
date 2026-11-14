import { radixSort } from "./src/radixSort.ts";

export function execute() {
  let error = false;
  const target = process.argv.slice(2).map(v => {
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

  console.log(`ソート結果：${radixSort(target)}`);
}

execute();
