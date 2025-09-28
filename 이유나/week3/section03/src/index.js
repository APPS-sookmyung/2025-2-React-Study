// common js module 시스템
// const moduleData = require("./math");

// // 구조 분해 할당도 사용 가능
// // const {add, sub} = require("./math");
// // console.log(add(1, 2));
// // console.log(sub(1, 2));

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
// console.log("안녕, Node.js");

// ES module system(ESM)
// package.json에 "type" : "module" 작성해야 함

// import multiply from "./math.js";
// import { add, sub } from "./math.js"; //확장자까지 붙여줘야함
// // 합쳐서 사용 가능
import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor"; //라이브러리 이름만 명시하면 됨

const color = randomColor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
