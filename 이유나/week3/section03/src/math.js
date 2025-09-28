// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add,
//   sub, //value와 key 값이 똑같을때 이렇게 적어도 됨
// };

// ESM
// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
