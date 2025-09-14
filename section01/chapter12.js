function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// console.log(varA); //함수도 변수에 담을 수 있음
varA();

//1. 함수 표현식
let varB = function () {
  //익명함수
  //선언 식이 아님!, 호출 불가능
  //   console.log("funcB"); //바로 담는 것도 가능
};

varB();

//2. 함수 표현식
let varC = (value) => {
  console.log(value);
  return value + 1;
}; //반환하는 함수라면 return 제거 가능

console.log(varC(10));
