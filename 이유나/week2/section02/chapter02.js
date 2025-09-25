// #단락평가
//조건문을 이용하지 않고도 특정 상황에서 어떠한 함수를 호출하지 않도록 방지해 주거나
// 어떠한 값들을 굳이 계산하지 않아도 제한하는 등의 기능을 개발 할 수 있다

// function returnFalse() {
//   console.log("False함수");
//   return undefined; //falsy한 값도 가능
// }

// function returnTrue() {
//   console.log("True함수");
//   return 10; //truthy한 값도 가능
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnFalse() || returnTrue()); -> 값 자체를 반환함

//false와 true 모두 출력하지 않고 returnTrue함수가 아예 호출되지 않은 것 처럼 보임
// -> 접근조차 하지 않음
// false && ? =무조건 False
// 특정 조건에 맞춰서 함수를 아예 호출하지 않도록 방지하는 기능

//활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "이정환" }); //->첫번째 truthy한 값 반환
