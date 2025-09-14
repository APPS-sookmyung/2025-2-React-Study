// #객체 part2
// 1. 상수 객체 (추가, 수정, 삭제 가능)
// 객체 값의 프로퍼티를 수정하는 건 아무런 문제X
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제는 가능

// console.log(animal);

//2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  //메서드 선언
  //함수 프로퍼티들은 메서드로서 객체의 동작을 정의한다
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
