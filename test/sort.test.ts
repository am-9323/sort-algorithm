import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { mergeSort } from "../src/mergeSort.ts";
import { radixSort } from "../src/radixSort.ts";

describe("mergeSort", () => {
  test("正常にソートされる", () => {
    assert.deepEqual(mergeSort([8, 1, 111, 50, 3]), [1, 3, 8, 50, 111]);
  });

  test("0や負の値が含まれていてもソートされる", () => {
    assert.deepEqual(mergeSort([8, 1, 0, 32, -3]), [-3, 0, 1, 8, 32]);
  });

  test("小数が含まれていてもソートされる", () => {
    assert.deepEqual(mergeSort([2.4, 2.1, 8, 4000, 32.5]), [2.1, 2.4, 8, 32.5, 4000]);
  });

  test("ランダムな値でもソートされる", () => {
    const randomArr = Array.from({ length: Math.random() * 100 }, _ => Math.random() * 10000);
    assert.deepEqual(mergeSort(randomArr), randomArr.sort((a, b) => a - b));
  });
})

describe("radixSort", () => {
  test("正常にソートされる", () => {
    assert.deepEqual(radixSort([8, 1, 111, 50, 3]), [1, 3, 8, 50, 111]);
  });

  test("0や負の値が含まれていてもソートされる", () => {
    assert.deepEqual(radixSort([8, 1, 0, 32, -3]), [-3, 0, 1, 8, 32]);
  });

  test("ランダムな値でもソートされる", () => {
    const randomArr = Array.from({ length: Math.random() * 100 }, _ => Math.floor(Math.random() * 10000));
    assert.deepEqual(radixSort(randomArr), randomArr.sort((a, b) => a - b));
  });
})
