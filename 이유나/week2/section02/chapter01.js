// js는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.
// #truthy & falsy

// 1. Falsy한 값 (조건문에서 거짓으로 판단)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if (!f1) {
//   console.log("falsy");
// }

// 2. truthy한 값
// -> 7가지의 falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t5) {
//   console.log("Truthy");
// }

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);
//매개변수로 객체로 받을 줄 알았지만 undefined를 받았을때
