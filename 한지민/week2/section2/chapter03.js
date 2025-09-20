// 구조 분해 할당
// 배열이나 객체에 저장된 여러 개의 값들을 분해해서 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당 
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스"
};

let {
    age: myAge,
    hobby,
    name,
    extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
}

func(person);
