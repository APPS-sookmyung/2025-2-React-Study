// #배열 메서드 1.요소 조작 (중요!!)
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem);
console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// push와 마찬가지로 변경된 배열의 길이를 함께 반환한다.
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);
// shift와 unshift는 상대적으로 느리게 동작하게 된다.
// -> 인덱스를 밀어야하고, 비효율적인 방식으로 작동
// 되도록이면 push나 pop을 이용하는 것이 좋다

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //2번 인덱스부터 5번 인덱스 전까지 잘라낸다. +1을 해야한다.
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3); //뒤에서부터 3개를 자른다.

console.log(sliced);
console.log(sliced2);
console.log(sliced3);
console.log(arr5); //원본 배열을 변하지 않는다.

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
