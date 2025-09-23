function splitAndCombine(arr) {
  const arr1 = arr.slice(0, 4);
  const arr2 = arr.slice(4, 8);
  return arr2.concat(arr1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);