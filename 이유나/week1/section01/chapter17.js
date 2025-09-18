// #배열
// 여러 개의 값을 순차적으로 담을 수 있는 자료형

//1. 배열 생성
let arr = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
//어떤 값이든 저장 가능

//2. 배열 요소 접근
//인덱스는 0번부터 시작
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello!"; //수정 가능
console.log(item1, item2);
