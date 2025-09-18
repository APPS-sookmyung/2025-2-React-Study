// #객체 part1
// 원시 타입이 아닌 객체 타입의 자료형
// 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴 (간단하기 때문에 대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
// 객체 프로퍼티는 key의 이름으로 불림, 갯수 제한 없음
let person = {
  name: "이유나",
  age: "20",
  hobby: "테니스",
  job: "FE developer",
  extra: {}, //value의 값은 자유롭게 아무거나 가능
  10: 20,
  "like cat": true, //띄어쓰기가 있는 문자열은 따옴표 사용, 아니면 사용X
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; //점 표기법
// console.log(name);

let age = person["age"]; // 프로퍼티의 key를 쌍따옴표와 함께 표기해야함
console.log(age); //괄호 표기법

let property = "hobby";
let hobby = person[property];
console.log(hobby);
//동적으로 프로퍼티를 변화시키려면 괄호 표기법
//그렇지 않으면 점 표기법

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "FE developer";
person["favoriteFood"] = "떡볶이";
console.log(person);

//3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜렛";

console.log(person);

//3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

//3-5. 프로퍼티의 존재 유무를 확인하는 방법
// in 연산자
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1);
console.log(result2);
