// #반복문으로 배열과 객체 순회하기

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //배열이나 함수도 프로퍼티를 가질 수 있다. (length프로퍼티에는 3이 저장)
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1-2. for of 반복문 (배열에만 쓸 수 있다.)
for (let item of arr) {
  //arr의 값을 하나씩 꺼내 item에 저장한다.
  console.log(item);
}

// 인덱스 방식 카운터 변수에 인덱스가 저장, for문안에서 인덱스를 통한 활동 가능
// for of 방식은 배열 안에 있는 값들은 순회만 한다는 차이점 존재
// 편한 방식으로 골라 사용하면 됨

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2-1. object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for (let value of values) {
  console.log(value);
}

// 2-3. for in (객체 순회만을 위한 특수한 반복문)
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// for in 과 for of 헷갈리지 않기
// 객체 프로퍼티를 확인할때 in을 쓰는 것을 떠올리기
