// 조건문 (if, switch)

// 1. if 조건문 (if문)
// 반드시 if로 시작해서 else로 끝나야한다,or if로 시작해서 그대로 끝나야 한다.
let num = 4;

// if (num >= 10) {
//   console.log("num은 10 이상입니다");
//   console.log("조건이 참 입니다!");
// } else if (num >= 5) {
//   console.log("num은 5 이상입니다");
// } else if (num >= 3) {
//   console.log("num은 3 이상입니다");
// } else {
//   console.log("조건이 거짓입니다!");
// }

// 2. switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
  case "cat": {
    //일치하는 케이스를 만나면 그 아래있는 모든 코드를 다 수행한다
    console.log("고양이");
    break; //고양이까지만 출력 가능
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    //if문의 else역할
    console.log("그런 동물은 전 모릅니다");
  }
}

// 어떤 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶다면 -> switch문
// 복잡한 여러 개의 조건을 이용하고 싶다면 -> if문
